import { NextApiRequest, NextApiResponse } from 'next';
import AppErrorInterface from '@/managers/AppError';

type asyncFunction = (req: NextApiRequest, res: NextApiResponse) => any;

const catchAsync =
    (fn: asyncFunction) => (req: NextApiRequest, res: NextApiResponse) => {
        fn(req, res).catch((err: Error | AppErrorInterface) => {
            if ((err as AppErrorInterface).isOperationError) {
                const appError = err as AppErrorInterface;
                res.status(appError.statusCode).json({
                    status: appError.status,
                    message: appError.message,
                });
            } else {
                res.status(500).json({
                    status: 'error',
                    message: err.message,
                });
            }
        });
    };

export default catchAsync;
