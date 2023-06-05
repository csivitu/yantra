import { getServerSession } from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';
import { TeamDocument } from '@/models/teamModel';
import Team from '@/models/teamModel';

const teamCheck =
    (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) =>
    async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const teamID = req.body.teamID;
            const team: TeamDocument | null = await Team.findById(teamID);
            if (!team)
                return res.status(400).json({
                    status: 'success',
                    message: 'No Team with this ID found.',
                });
            else {
                req.team = team;
                return handler(req, res);
            }
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error2',
            });
        }
    };

export default teamCheck;
