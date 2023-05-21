import { connectToDB, disconnectFromDB } from '@/managers/DB';
import Event, { EventDocument } from '@/models/eventModel';
import APIFeatures from '@/utils/APIFeatures';
import { NextApiRequest, NextApiResponse } from 'next';

const getAllEvents = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDB();

    const totalNumberofEvents = await Event.find({
        type: req.query.type,
    }).countDocuments();

    const eventsQuery = new APIFeatures<EventDocument>(Event.find(), req.query);
    eventsQuery.filter().paginator();

    const events = await eventsQuery.query;

    // await disconnectFromDB();

    res.status(201).json({
        status: 'success',
        events,
        totalNumberofEvents,
    });
};

const addEvent = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDB();
    const event = await Event.create(req.body);
    await disconnectFromDB();

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
