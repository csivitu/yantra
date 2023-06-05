import { connectToDB } from '@/managers/DB';
import adminOnlyCheck from '@/middlewares/adminOnlyCheck';
import sessionCheck from '@/middlewares/sessionCheck';
import Team from '@/models/teamModel';
import { createTeamSchema } from '@/schemas/teamRequestSchemas';
import { NextApiRequest, NextApiResponse } from 'next';

const createTeam = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const validationRes = createTeamSchema.safeParse(req.body);
        if (!validationRes.success)
            res.status(400).json({
                status: 'error',
                message:
                    'Payload Validation Failed: ' +
                    validationRes.error.issues[0].message,
            });
        else {
            const team = await Team.create(req.body);
            res.status(201).json({
                status: 'success',
                team,
            });
        }
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
        case 'POST':
            await createTeam(req, res);
            break;
    }
};

export default sessionCheck(adminOnlyCheck(handler));
