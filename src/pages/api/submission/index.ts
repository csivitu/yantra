import { LOCK_SUBMISSIONS } from '@/constants';
import { connectToDB } from '@/managers/DB';
import sessionCheck from '@/middlewares/sessionCheck';
import teamCheck from '@/middlewares/teamCheck';
import Submission from '@/models/submissionModel';
import Team from '@/models/teamModel';
import {
    addSubmissionSchema,
    editSubmissionSchema,
} from '@/schemas/submissionRequestSechemas';
import { NextApiRequest, NextApiResponse } from 'next';

const getSubmission = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if ((await Team.findById(req.team.id)).submission) {
            res.status(400).json({
                status: 'error',
                message: 'Can only have one submission.',
            });
        } else {
            const submission = await Submission.findById(req.team.submission);

            res.status(201).json({
                status: 'success',
                submission,
            });
        }
    } catch {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
};

const addSubmission = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const validationRes = addSubmissionSchema.safeParse(req.body);
        if (!validationRes.success)
            res.status(400).json({
                status: 'error',
                message:
                    'Payload Validation Failed: ' +
                    validationRes.error.issues[0].message,
            });
        else {
            if (LOCK_SUBMISSIONS)
                res.status(201).json({
                    status: 'error',
                    message: 'Submissions are now locked.',
                });
            else {
                const submission = await Submission.create(req.body);
                const team = await Team.findById(req.team.id);
                team.submission = submission.id;
                await team.save();

                res.status(201).json({
                    status: 'success',
                });
            }
        }
    } catch {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
};

const editSubmission = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const validationRes = editSubmissionSchema.safeParse(req.body);
        if (!validationRes.success)
            res.status(400).json({
                status: 'error',
                message:
                    'Payload Validation Failed: ' +
                    validationRes.error.issues[0].message,
            });
        else {
            if (LOCK_SUBMISSIONS)
                res.status(201).json({
                    status: 'error',
                    message: 'Submissions are now locked.',
                });
            else {
                const submission = await Submission.findById(
                    req.team.submission
                );
                await submission.update(req.body);

                res.status(201).json({
                    status: 'success',
                });
            }
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
        case 'GET':
            await getSubmission(req, res);
            break;
        case 'POST':
            await addSubmission(req, res);
            break;
        case 'PATCH':
            await editSubmission(req, res);
            break;
    }
};

export default sessionCheck(teamCheck(handler));
