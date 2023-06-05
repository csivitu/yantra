import { connectToDB } from '@/managers/DB';
import adminOnlyCheck from '@/middlewares/adminOnlyCheck';
import sessionCheck from '@/middlewares/sessionCheck';
import Team from '@/models/teamModel';
import { NextApiRequest, NextApiResponse } from 'next';

const createTeam = async (req: NextApiRequest, res: NextApiResponse) => {
    const team = await Team.create(req.body);
    res.status(201).json({
        status: 'success',
        team,
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDB();
    switch (req.method) {
        case 'POST':
            await createTeam(req, res);
            break;
    }
};

export default sessionCheck(adminOnlyCheck(handler));
