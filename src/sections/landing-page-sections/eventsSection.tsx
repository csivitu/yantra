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
            <div className="h-[10vh] flex justify-around items-center text-4xl">
                EVENTS
            </div>
            <div className="w-full h-max bg-slate-500 ">
                <div>
                    <div className="text-2xl h-[10vh] flex justify-around items-center">
                        EVENTs
                    </div>
                    <div className="flex justify-around items-center flex-col py-10 gap-5">
                        <EventsCard />
                        <EventsCard />
                        <EventsCard />
                    </div>
                </div>
                <div>
                    <div className="text-2xl   h-[10vh] flex justify-around items-center">
                        Hacks
                    </div>
                    <div className="flex justify-around items-center flex-col py-10 gap-5">
                        <EventsCard />
                        <EventsCard />
                        <EventsCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventsSection;
