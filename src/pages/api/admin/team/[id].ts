import { connectToDB } from '@/managers/DB';
import adminOnlyCheck from '@/middlewares/adminOnlyCheck';
import sessionCheck from '@/middlewares/sessionCheck';
import Team from '@/models/teamModel';
import User from '@/models/userModel';
import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

const getTeam = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const query = req.query;
        const { id } = query;
        const team = await Team.findById(id)
            .populate({
                path: 'submission',
                select: {
                    title: 1,
                    description: 1,
                    links: 1,
                    status: 1,
                    round1Score: 1,
                    round1Judge: 1,
                    round1Comment: 1,
                    round2Score: 1,
                    round2Judge: 1,
                    round2Comment: 1,
                    round3Score: 1,
                    round3Judge: 1,
                    round3Comment: 1,
                },
            })
            .populate('members');
        if (!team)
            res.status(400).json({
                status: 'error',
                message: 'No Team of this ID found.',
            });
        else
            res.status(200).json({
                status: 'success',
                message: '',
                team,
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
        case 'GET':
            await getTeam(req, res);
            break;
    }
};

export default sessionCheck(adminOnlyCheck(handler));
