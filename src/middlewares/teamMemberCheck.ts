import { NextApiRequest, NextApiResponse } from 'next';

const teamMemberCheck =
    (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) =>
    async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const team = req.team;
            if (!team.members.includes(req.session.user.id))
                return res.status(400).json({
                    status: 'success',
                    message:
                        'Cannot perform this action. You are not a part of this team.',
                });
            else return handler(req, res);
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error',
            });
        }
    };

export default teamMemberCheck;
