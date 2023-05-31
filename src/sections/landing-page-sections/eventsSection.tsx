import EventsCard from '@/components/uncommon/landing-page-cards/eventsCard';
import React from 'react';
import { useEffect, useState } from 'react';
import getHandler from '@/handlers/getHandler';
import envHandler from '@/managers/envHandler';
const EventsSection = () => {
    const [eventData, setEventData] = useState([]);
    const eventsController = async () => {
        const events = await getHandler(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/events`,
            false
        );
        setEventData(events);
        console.log(eventData);
    };
    useEffect(() => {
        eventsController();
    }, []);
    return (
        <>
            <div
                id="events-section"
                className="h-[20vh] flex justify-around bg-transparent items-center text-4xl"
            >
                EVENTS
            </div>

            <div className="flex justify-around items-center flex-col py-10 gap-5">
                <EventsCard />
                <EventsCard />
                <EventsCard />
            </div>
            <div className="w-full flex justify-around items-center">
                <button className="bg-[#3A3646] hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg flex justify-center gap-2 items-center">
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
                            stroke-width="3.41667"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 12H28.6667V28.6667"
                            stroke="white"
                            stroke-width="3.41667"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default EventsSection;
