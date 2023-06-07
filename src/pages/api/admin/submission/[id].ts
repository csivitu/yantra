import { CURRENT_ROUND } from '@/constants';
import { connectToDB } from '@/managers/DB';
import adminOnlyCheck from '@/middlewares/adminOnlyCheck';
import sessionCheck from '@/middlewares/sessionCheck';
import Submission from '@/models/submissionModel';
import Team from '@/models/teamModel';
import { NextApiRequest, NextApiResponse } from 'next';

const getSubmission = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const query = req.query;
        const { id } = query;
        const submission = await Submission.findById(id);
        res.status(200).json({
            status: 'success',
            message: '',
            submission,
        });
    } catch {
        res.status(500).json({
            status: 'success',
            message: 'Internal Server Error',
        });
    }
};

const editSubmission = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const query = req.query;
        const { id } = query;
        const team = await Team.findById(id).populate('submission');
        const submission = team.submission;
        if (!submission) {
            res.status(400).json({
                status: 'error',
                message: 'No submission for the team found.',
            });
        } else {
            if (submission.status !== req.body.status - 1)
                res.status(400).json({
                    status: 'error',
                    message: 'Invalid attempt to change the submission status',
                });
            else if (submission.status !== CURRENT_ROUND - 1) {
                res.status(400).json({
                    status: 'error',
                    message: 'Invalid attempt to change the submission status',
                });
            } else {
                console.log(req.body);
                const editedSubmission = await Submission.findByIdAndUpdate(
                    submission.id,
                    req.body
                );
                res.status(200).json({
                    status: 'success',
                    message: 'Submission updated.',
                    submission: editedSubmission,
                });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'success',
            message: 'Internal Server Error',
        });
    }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDB();
    switch (req.method) {
        case 'GET':
            await getSubmission(req, res);
            break;
        case 'PATCH':
            await editSubmission(req, res);
            break;
    }
};

export default sessionCheck(adminOnlyCheck(handler));
