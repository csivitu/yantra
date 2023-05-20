import { connectToDB, disconnectFromDB } from '@/managers/DB';
import Event from '@/models/eventModel';
import { NextApiRequest, NextApiResponse } from 'next';

const getAllEvents = async (req: NextApiRequest, res: NextApiResponse) => {
    connectToDB();
    const events = await Event.find();
    disconnectFromDB();

    res.status(201).json({
        status: 'success',
        events,
    });
};

const addEvent = async (req: NextApiRequest, res: NextApiResponse) => {
    connectToDB();
    const event = await Event.create(req.body);
    disconnectFromDB();

    res.status(201).json({
        status: 'success',
        event,
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            await getAllEvents(req, res);
            break;
        case 'POST':
            await addEvent(req, res);
            break;
    }
};

export default handler;
