import EventsCard from '@/components/uncommon/landing-page-cards/eventsCard';
import React from 'react';
import { useEffect, useState } from 'react';
import getHandler from '@/handlers/getHandler';
import envHandler from '@/managers/envHandler';
import Link from 'next/link';
import { EventDocument } from '@/models/eventModel';
const EventsSection = () => {
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(true);
    const eventsController = async () => {
        const res = await getHandler(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/events`,
            false
        );
        setEventData(res.data.events);
        setLoading(false);
        console.log(eventData);
    };
    useEffect(() => {
        eventsController();
    }, []);
    return (
        <>
            <div
                id="events-section"
                className="w-fit text-white font-bronson uppercase text-5xl font-extrabold m-auto pt-40 pb-20"
            >
                Events
            </div>

            <div className="flex justify-around items-center flex-col py-10 gap-5">
                {eventData.slice(0, 3).map((event: EventDocument) => {
                    return <EventsCard key={event.id} event={event} />;
                })}
            </div>
            <div className="w-full flex justify-around items-center">
                <Link
                    href={'/events'}
                    className="bg-[#FFA412] hover:bg-[#ffb744] text-white font-bold py-4 px-6 rounded-lg flex justify-center gap-2 items-center"
                >
                    <p className="text-xl font-spaceGrotesk">See all events</p>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.667 28.3333L27 13.0003"
                            stroke="white"
                            strokeWidth="3.41667"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 12H28.6667V28.6667"
                            stroke="white"
                            strokeWidth="3.41667"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            </div>
        </>
    );
};

export default EventsSection;
