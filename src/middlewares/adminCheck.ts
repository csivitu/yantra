import User from '@/models/userModel';
import { NextApiRequest, NextApiResponse } from 'next';

const adminCheck =
    (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) =>
    async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const user = await User.findById(req.session.user.id);
            if (!user.admin)
                return res.status(400).json({
                    status: 'success',
                    message:
                        'You do not have the permission to perform this action.',
                });
            else return handler(req, res);
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error',
            });
        }
    };

export default adminCheck;
