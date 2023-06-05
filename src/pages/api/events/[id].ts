import AppError from '@/managers/AppError';
import { connectToDB } from '@/managers/DB';
import Event from '@/models/eventModel';
import { NextApiRequest, NextApiResponse } from 'next';

const getEvent = async (req: NextApiRequest, res: NextApiResponse) => {
    const event = await Event.findById(req.query.id);

    if (!event)
        res.status(400).json({
            status: 'failed',
            message: 'No Event of this ID found.',
        });
    else
        res.status(200).json({
            status: 'success',
            event,
        });
};

const updateEvent = async (req: NextApiRequest, res: NextApiResponse) => {
    const event = await Event.findByIdAndUpdate(req.query.id, req.body);

    if (!event) throw new AppError('No Event of this ID Found.', 400);

    res.status(201).json({
        status: 'success',
        event,
    });
};

const deleteEvent = async (req: NextApiRequest, res: NextApiResponse) => {
    const event = await Event.findByIdAndDelete(req.query.id);

    if (!event) throw new AppError('No Event of this ID Found.', 400);

    res.status(204).json({
        status: 'success',
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    connectToDB();
    switch (req.method) {
        case 'GET':
            await getEvent(req, res);
            break;
        case 'PATCH':
            await updateEvent(req, res);
            break;
        case 'DELETE':
            await deleteEvent(req, res);
            break;
    }
};

export default handler;
