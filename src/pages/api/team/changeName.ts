import { connectToDB } from '@/managers/DB';
import sessionCheck from '@/middlewares/sessionCheck';
import teamCheck from '@/middlewares/teamCheck';
import Team from '@/models/teamModel';
import { NextApiRequest, NextApiResponse } from 'next';

const changeName = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // add req body validators and create middlewares
        const team = await Team.findById(req.team.id);
        team.title = req.body.title;
        team.isNameChanged = true;
        team.save();

        res.status(200).json({
            status: 'success',
            message: 'Team name changed.',
        });
    } catch {
        res.status(500).json({
            status: 'success',
            message: 'Internal Server Error',
        });
    }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDB();
    switch (req.method) {
        case 'PATCH':
            await changeName(req, res);
            break;
    }
};

export default sessionCheck(teamCheck(handler));
