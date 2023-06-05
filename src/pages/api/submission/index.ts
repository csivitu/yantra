import { connectToDB } from '@/managers/DB';
import sessionCheck from '@/middlewares/sessionCheck';
import teamCheck from '@/middlewares/teamCheck';
import Submission from '@/models/submissionModel';
import Team from '@/models/teamModel';
import { NextApiRequest, NextApiResponse } from 'next';

const getSubmission = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const submission = await Submission.findById(req.team.submission);

        res.status(201).json({
            status: 'success',
            submission,
        });
    } catch {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
};

const addSubmission = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const submission = await Submission.create(req.body);
        const team = await Team.findById(req.team.id);
        team.submission = submission.id;
        await team.save();

        res.status(201).json({
            status: 'success',
        });
    } catch {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
};

const editSubmission = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const submission = await Submission.findById(req.team.submission);
        await submission.update(req.body);

        res.status(201).json({
            status: 'success',
        });
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
