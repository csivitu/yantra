import { NextApiRequest, NextApiResponse } from 'next';
import { TeamDocument } from '@/models/teamModel';
import Team from '@/models/teamModel';

const teamCheck =
    (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) =>
    async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const team: TeamDocument | null =
                req.session.user.team ||
                (await Team.findOne({ members: req.session.user.id }));
            if (!team)
                return res.status(400).json({
                    status: 'success',
                    message: 'You are not a part of any team.',
                });
            else {
                req.team = team;
                return handler(req, res);
            }
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error',
            });
        }
    };

export default teamCheck;
