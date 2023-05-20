import { google } from 'googleapis';
import envHandler from '@/managers/envHandler';
import axios from 'axios';
import User from '@/models/userModel';
import { UserDocument } from '@/models/userModel';
import * as jwt from 'jsonwebtoken';
import { connectToDB, disconnectFromDB } from '@/managers/DB';

const oauth2Client = new google.auth.OAuth2(
    envHandler('GOOGLE_CLIENT_ID'),
    envHandler('GOOGLE_CLIENT_SECRET'),
    'http://localhost:3000/api/auth/google/callback'
);

const createSendToken = (user: UserDocument, res) => {
    const token = jwt.sign({ id: user._id }, envHandler('JWT_KEY'), {
        expiresIn: Number(envHandler('JWT_TIME')) * 24 * 60,
    });

    res.redirect(`http://localhost:3000/auth/google?token=${token}`);
};

const getUser = async (req, res) => {
    const code = req.query.code as string;

    const { tokens } = await oauth2Client.getToken(code);

    const googleUser = await axios
        .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
            {
                headers: {
                    Authorization: `Bearer ${tokens.id_token}`,
                },
            }
        )
        .then((res) => res.data)
        .catch((error) => {
            throw new Error(error.message);
        });

    const VITEmailFormat =
        /^[a-zA-Z]+.[a-zA-Z]+20[0,1,2][0-9]@vitstudent.ac.in/;
    if (!googleUser.email.match(VITEmailFormat))
        res.status(401).json({
            message: 'Only VIT Students Allowed',
        });
    else {
        await connectToDB();
        const user = await User.findOne({ email: googleUser.email });
        await disconnectFromDB();
        console.log(user);
        if (!user) {
            await connectToDB();
            const newUser = await User.create({
                name: googleUser.name,
                email: googleUser.email,
                profilePic: googleUser.picture,
            });
            await disconnectFromDB();
            createSendToken(newUser, res);
        } else createSendToken(user, res);
    }
};

export default getUser;
