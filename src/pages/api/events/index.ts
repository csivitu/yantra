import { connectToDB, disconnectFromDB } from '@/managers/DB';
import Event, { EventDocument } from '@/models/eventModel';
import APIFeatures from '@/utils/APIFeatures';
import { NextApiRequest, NextApiResponse } from 'next';

const getAllEvents = async (req: NextApiRequest, res: NextApiResponse) => {
    const eventsQuery = new APIFeatures<EventDocument>(Event.find(), req.query);
    eventsQuery.paginator();

    const events = await eventsQuery.query;

    res.status(201).json({
        status: 'success',
        events,
    });
};

const addEvent = async (req: NextApiRequest, res: NextApiResponse) => {
    const event = await Event.create(req.body);

    res.status(201).json({
        status: 'success',
        event,
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDB();
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
