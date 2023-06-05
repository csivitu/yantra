import { connectToDB } from '@/managers/DB';
import sessionCheck from '@/middlewares/sessionCheck';
import teamCheck from '@/middlewares/teamCheck';
import Team from '@/models/teamModel';
import { TeamDocument } from '@/models/teamModel';
import authOptions from '@/server/auth';
import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

const getTeam = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // add req body validators
        res.status(200).json({
            status: 'success',
            message: '',
            team: req.team,
        });
    } catch {
        res.status(201).json({
            status: 'success',
            message: 'Internal Server Error',
        });
    }
};

const changeName = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const session = await getServerSession(req, res, authOptions);

        if (!session)
            res.status(401).json({
                status: 'success',
                message: 'You are not logged in.',
            });
        else {
            const userID = session.user.id;
            if (!userID)
                res.status(401).json({
                    status: 'success',
                    message: 'Cannot perform this action, please log in again.',
                });
            else {
                const teamID = req.body.teamID;
                const team: TeamDocument | null = await Team.findById(teamID);
                if (!team)
                    res.status(400).json({
                        status: 'success',
                        message: 'No Team with this ID found.',
                    });
                else {
                    if (
                        !team.members.includes(
                            new mongoose.Schema.Types.ObjectId(userID)
                        )
                    )
                        res.status(400).json({
                            status: 'success',
                            message:
                                'You do not have the permission to perform this action.',
                        });
                    else {
                        // add req body validators and create middlewares
                        team.title = req.body.title;
                        team.isNameChanged = true;
                        team.save();

                        res.status(200).json({
                            status: 'success',
                            message: 'Team name changed.',
                        });
                    }
                }
            }
        }
    } catch {
        res.status(201).json({
            status: 'success',
            message: 'Internal Server Error',
        });
    }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDB();
    switch (req.method) {
        case 'GET':
            await getTeam(req, res);
            break;
        case 'PATCH':
            await changeName(req, res);
            break;
    }
};

export default sessionCheck(teamCheck(handler));
