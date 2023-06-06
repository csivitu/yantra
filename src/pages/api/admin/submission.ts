import { connectToDB } from '@/managers/DB';
import adminOnlyCheck from '@/middlewares/adminOnlyCheck';
import sessionCheck from '@/middlewares/sessionCheck';
import Submission from '@/models/submissionModel';
import Team from '@/models/teamModel';
import { NextApiRequest, NextApiResponse } from 'next';

const changeStatus = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const submission = await Submission.findById(req.body.submissionID);
        if (submission.status !== req.body.status - 1)
            res.status(400).json({
                status: 'error',
                message: 'Invalid attempt to change the submission status',
            });
        else {
            submission.status = req.body.status;
            await submission.save();
            res.status(200).json({
                status: 'success',
                message: 'Submission status updated.',
            });
        }
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
            await changeStatus(req, res);
            break;
    }
};

export default sessionCheck(adminOnlyCheck(handler));
