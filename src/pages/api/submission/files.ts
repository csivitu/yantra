import { NextApiHandler, NextApiRequest } from 'next';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs/promises';

export const config = {
    api: {
        bodyParser: false,
    },
};

const readFile = (
    req: NextApiRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
    const options: formidable.Options = {};

    options.uploadDir = path.join(process.cwd(), '/public/submissions');
    options.filename = (name, ext, path, form) => {
        return Date.now().toString() + '_' + path.originalFilename;
    };
    options.keepExtensions = true;

    options.maxTotalFileSize = 4000 * 1024 * 1024;
    const form = formidable(options);
    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
        });
    });
};

const handler: NextApiHandler = async (req, res) => {
    try {
        await fs.readdir(path.join(process.cwd() + '/public', '/submissions'));
    } catch (error) {
        await fs.mkdir(path.join(process.cwd() + '/public', '/submissions'));
    }
    await readFile(req);
    res.status(200).json({
        status: 'success',
        message: 'Files successfully uploaded.',
    });
};

export default handler;
