import { connectToDB } from '@/managers/DB';
import adminOnlyCheck from '@/middlewares/adminOnlyCheck';
import sessionCheck from '@/middlewares/sessionCheck';
import Team from '@/models/teamModel';
import User from '@/models/userModel';
import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

const editUserTeam = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const migratingUser = await User.findById(req.body.userID);
        const userTeam = await Team.findOne({ memebers: migratingUser.id });

        if (userTeam) {
            const members = userTeam.members;

            const newMembers: mongoose.Schema.Types.ObjectId[] = [];

            members.forEach((memberID: mongoose.Schema.Types.ObjectId) => {
                if (memberID !== migratingUser.id) newMembers.push(memberID);
            });

            userTeam.members = newMembers;

            await userTeam.save();
        }

        if (req.body.newTeamID) {
            const newTeam = await Team.findById(req.body.newTeamID);
            newTeam.members.append(migratingUser.id);
            await newTeam.save();
        }

        res.status(200).json({
            status: 'success',
            message: 'Team Members edited',
        });
    } catch {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDB();
    switch (req.method) {
        case 'PATCH':
            await editUserTeam(req, res);
            break;
    }
};

export default sessionCheck(adminOnlyCheck(handler));
