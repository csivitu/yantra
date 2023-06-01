import { connectToDB, disconnectFromDB } from '@/managers/DB';
import Event, { EventDocument } from '@/models/eventModel';
import APIFeatures from '@/utils/APIFeatures';
import { NextApiRequest, NextApiResponse } from 'next';

const getSearchEvents = async (req: NextApiRequest, res: NextApiResponse) => {
    const eventsQuery = new APIFeatures<EventDocument>(Event.find(), req.query);

    eventsQuery.search();

    const events = await eventsQuery.query;

    res.status(201).json({
        status: 'success',
        events,
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDB();
    switch (req.method) {
        case 'GET':
            await getSearchEvents(req, res);
            break;
    }
};

export default handler;
