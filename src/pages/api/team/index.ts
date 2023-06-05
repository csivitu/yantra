import { connectToDB } from '@/managers/DB';
import sessionCheck from '@/middlewares/sessionCheck';
import teamCheck from '@/middlewares/teamCheck';
import { NextApiRequest, NextApiResponse } from 'next';

const getTeam = async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({
        status: 'success',
        message: '',
        team: req.team,
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDB();
    switch (req.method) {
        case 'GET':
            await getTeam(req, res);
            break;
    }
};

export default sessionCheck(teamCheck(handler));
