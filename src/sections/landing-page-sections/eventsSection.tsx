import EventsCard from '@/components/uncommon/landing-page-cards/eventsCard';
import React from 'react';
import { useEffect, useState } from 'react';
import getHandler from '@/handlers/getHandler';
import Link from 'next/link';
import { EventType } from '@/models/eventModel';

const EventsSection = () => {
    const [eventData, setEventData] = useState([]);
    const eventsController = async () => {
        const res = await getHandler(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/events`,
            false
        );
        if (res.status === 1) setEventData(res.data.events);
    };
    useEffect(() => {
        eventsController();
    }, []);
    return (
        <>
            <div
                id="events-section"
                className="w-fit text-white bg-transparent font-bronson uppercase text-5xl font-extrabold m-auto pt-32 pb-10 max-md:pb-0"
            >
                EVENTS
            </div>

            <div className="flex justify-around bg-transparent items-center flex-col py-10 gap-5 max-md:px-6">
                {eventData.slice(0, 3).map((event: EventType) => {
                    return <EventsCard key={event._id} event={event} />;
                })}
            </div>
            <div className="w-full flex justify-around items-center">
                <Link
                    href="/events"
                    className="relative w-48 h-16 flex items-center justify-center px-5 py-3 overflow-hidden font-bold rounded-full group"
                >
                    <span className="w-96 h-96 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span className="absolute top-0 left-0 w-56 h-56 -mt-1 transition-all duration-500 ease-in-out -translate-x-96 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span className="font-spaceGrotesk text-xl font-bold flex justify-center items-center  relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900">
                        VIEW ALL
                    </span>
                    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                </Link>
            </div>
        </>
    );
};

export default EventsSection;
