import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs/promises';
import sessionCheck from '@/middlewares/sessionCheck';
import teamCheck from '@/middlewares/teamCheck';
import Submission from '@/models/submissionModel';
import { LOCK_SUBMISSIONS } from '@/constants';

export const config = {
    api: {
        bodyParser: false,
    },
};

const readFile = (
    req: NextApiRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
    const options: formidable.Options = {};

    options.uploadDir = path.join(
        process.cwd(),
        `/public/submissions/${req.team.id}`
    );
    options.filename = (name, ext, path, form) => {
        return path.originalFilename + '_' + Date.now().toString();
    };
    options.keepExtensions = true;

    options.maxTotalFileSize = 4000 * 1024 * 1024;
    const form = formidable(options);
    console.log(files);
    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
            console.log('1.' + files);
            // Submission.findById(req.team.submission).then(submission=>{
            //     submission.files = submission.files.push()
            // })
        });
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (LOCK_SUBMISSIONS)
        res.status(400).json({
            status: 'error',
            message: 'Submissions are now locked.',
        });
    else {
        try {
            await fs.readdir(
                path.join(
                    process.cwd() + '/public',
                    '/submissions',
                    `/${req.team.id}`
                )
            );
        } catch (error) {
            await fs.mkdir(
                path.join(
                    process.cwd() + '/public',
                    '/submissions',
                    `/${req.team.id}`
                )
            );
        }
        await readFile(req);
        res.status(200).json({
            status: 'success',
            message: 'Files successfully uploaded.',
        });
    }
};

export default sessionCheck(teamCheck(handler));
