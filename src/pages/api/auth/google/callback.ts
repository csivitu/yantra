import envHandler from '@/managers/envHandler';
import axios from 'axios';
import User from '@/models/userModel';
import { UserDocument } from '@/models/userModel';
import * as jwt from 'jsonwebtoken';
import { connectToDB, disconnectFromDB } from '@/managers/DB';
import { setCookie } from 'cookies-next';
import oauth2Client from '@/utils/oauth2Client';
import { NextApiRequest, NextApiResponse } from 'next';

const createSendToken = (
    user: UserDocument,
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const token = jwt.sign({ id: user._id }, envHandler('JWT_KEY'), {
        expiresIn: Number(envHandler('JWT_TIME')) * 24 * 60,
    });

    setCookie('token', token, {
        req,
        res,
        httpOnly: false,
        maxAge: Number(envHandler('JWT_TIME')) * 24 * 60,
    });

    res.redirect(envHandler('BASE_URL'));
};

const getPayload = async (req: NextApiRequest, res: NextApiResponse) => {
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
        const user = (await User.findOne({ email: googleUser.email }))
            ? await User.findOne({ email: googleUser.email })
            : await User.create({
                  name: googleUser.name,
                  email: googleUser.email,
                  profilePic: googleUser.picture,
              });

        await disconnectFromDB();

        createSendToken(user, req, res);
    }
};

export default getPayload;
