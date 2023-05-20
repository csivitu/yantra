import AppError from '@/managers/AppError';
import { connectToDB, disconnectFromDB } from '@/managers/DB';
import catchAsync from '@/managers/catchAsync';
import Event from '@/models/eventModel';
import { NextApiRequest, NextApiResponse } from 'next';

const getAllEvents = catchAsync(
    async (req: NextApiRequest, res: NextApiResponse) => {
        await connectToDB();
        const events = await Event.find();
        await disconnectFromDB();

        res.status(201).json({
            status: 'success',
            events,
        });
    }
);

const addEvent = catchAsync(
    async (req: NextApiRequest, res: NextApiResponse) => {
        await connectToDB();
        const event = await Event.create(req.body);
        await disconnectFromDB();

        res.status(201).json({
            status: 'success',
            event,
        });
    }
);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            getAllEvents(req, res);
            break;
        case 'POST':
            addEvent(req, res);
            break;
    }
};

export default handler;
