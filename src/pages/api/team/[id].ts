import { connectToDB } from '@/managers/DB';
import sessionCheck from '@/middlewares/sessionCheck';
import teamCheck from '@/middlewares/teamCheck';
import teamMemberCheck from '@/middlewares/teamMemberCheck';
import Team from '@/models/teamModel';
import { NextApiRequest, NextApiResponse } from 'next';

const getTeam = async (req: NextApiRequest, res: NextApiResponse) => {
    // add req body validators
    res.status(200).json({
        status: 'success',
        message: '',
        team: req.team,
    });
};

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

export default sessionCheck(teamCheck(teamMemberCheck(handler)));
