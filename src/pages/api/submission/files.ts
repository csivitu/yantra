import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs/promises';
import sessionCheck from '@/middlewares/sessionCheck';
import teamCheck from '@/middlewares/teamCheck';
import Submission from '@/models/submissionModel';
import { LOCK_SUBMISSIONS } from '@/constants';
import slugify from 'slugify';

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
    options.maxFiles = 1;
    options.filename = (name, ext, path, form) => {
        return (
            slugify(req.team.title) +
            '_' +
            Date.now().toString() +
            '_' +
            slugify(path.originalFilename as string)
        );
    };
    options.maxTotalFileSize = 4000 * 1024 * 1024;
    // options.filter = (part) => {
    //     return (
    //         part.name === 'media' && (part.mimetype?.includes('image') || false)
    //     );
    // };
    const form = formidable(options);

    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
        });
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.status(405).json({
            data: null,
            error: 'Method Not Allowed',
        });
        return;
    }
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
        const { fields, files } = await readFile(req);

        const fileURLs: string[] = [];

        Object.keys(files).forEach((fieldName) => {
            const fileArray = Array.isArray(files[fieldName])
                ? (files[fieldName] as formidable.File[])
                : ([files[fieldName]] as formidable.File[]);

            fileArray.forEach((file) => {
                const fileUrl = file.filepath.split('\\').slice(-3).join('/');
                fileURLs.push(fileUrl);
            });
        });

        const submission = await Submission.findById(req.team.submission);

        submission.files = fileURLs;

        await submission.save();

        res.status(200).json({
            status: 'success',
            message: 'Files successfully uploaded.',
        });
    }
};

export default sessionCheck(teamCheck(handler));
