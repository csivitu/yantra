import { connectToDB } from '@/managers/DB';
import sessionCheck from '@/middlewares/sessionCheck';
import teamCheck from '@/middlewares/teamCheck';
import Team from '@/models/teamModel';
import { changeTeamNameSchema } from '@/schemas/teamRequestSchemas';
import { NextApiRequest, NextApiResponse } from 'next';

const changeName = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const validationRes = changeTeamNameSchema.safeParse(req.body);
        if (!validationRes.success)
            res.status(400).json({
                status: 'error',
                message:
                    'Payload Validation Failed: ' +
                    validationRes.error.issues[0].message,
            });
        else {
            if (req.team.isNameChanged) {
                res.status(400).json({
                    status: 'error',
                    message: 'Team name already changed once',
                });
            } else {
                const team = await Team.findById(req.team.id);
                team.title = req.body.title;
                team.isNameChanged = true;
                team.save();

                res.status(200).json({
                    status: 'success',
                    message: 'Team name changed.',
                });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'success',
            message: 'Internal Server Error',
            error: err,
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
