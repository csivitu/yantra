import { connectToDB } from '@/managers/DB';
import adminOnlyCheck from '@/middlewares/adminOnlyCheck';
import sessionCheck from '@/middlewares/sessionCheck';
import Team from '@/models/teamModel';
import { NextApiRequest, NextApiResponse } from 'next';

const getTeams = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const teams = await Team.find().populate('submission');
        res.status(200).json({
            status: 'success',
            message: '',
            teams,
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
            await getTeams(req, res);
            break;
    }
};

export default sessionCheck(adminOnlyCheck(handler));
