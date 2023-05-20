import AppError from '@/managers/AppError';
import { connectToDB, disconnectFromDB } from '@/managers/DB';
import catchAsync from '@/managers/catchAsync';
import Event from '@/models/eventModel';
import { NextApiRequest, NextApiResponse } from 'next';

const getEvent = catchAsync(
    async (req: NextApiRequest, res: NextApiResponse) => {
        connectToDB();
        const event = await Event.findById(req.query.id);
        disconnectFromDB();

        if (!event) throw new AppError('No Event of this ID Found.', 400);

        res.status(201).json({
            status: 'success',
            event,
        });
    }
);

const updateEvent = catchAsync(
    async (req: NextApiRequest, res: NextApiResponse) => {
        connectToDB();
        const event = await Event.findByIdAndUpdate(req.query.id, req.body);
        disconnectFromDB();

        if (!event) throw new AppError('No Event of this ID Found.', 400);

        res.status(201).json({
            status: 'success',
            event,
        });
    }
);

const deleteEvent = catchAsync(
    async (req: NextApiRequest, res: NextApiResponse) => {
        connectToDB();
        const event = await Event.findByIdAndDelete(req.query.id);
        disconnectFromDB();

        if (!event) throw new AppError('No Event of this ID Found.', 400);

        res.status(204).json({
            status: 'success',
        });
    }
);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            getEvent(req, res);
            break;
        case 'PATCH':
            updateEvent(req, res);
            break;
        case 'DELETE':
            deleteEvent(req, res);
            break;
    }
};

export default handler;
