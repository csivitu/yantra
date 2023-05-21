import React, { useState, useEffect } from 'react';
import EventsCard from '@/components/uncommon/landing-page-cards/eventsCard';
import { EventDocument } from '@/models/eventModel';
import getHandler from '@/handlers/getHandler';
import InfiniteScroll from 'react-infinite-scroll-component';

const WorkshopsList = () => {
    const [workshops, setWorkshops] = useState<EventDocument[]>([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const getWorkshops = () => {
        getHandler(
            `${
                process.env.NEXT_PUBLIC_BASE_URL
            }/api/events?page=${page}&limit=${2}&type=0`,
            false
        )
            .then((res) => {
                setWorkshops([...workshops, ...res.data.events]);
                setPage((prev) => prev + 1);
                setCount(res.data.totalNumberofEvents);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        getWorkshops();
    }, []);

    return (
        <>
            <div className="w-full h-max bg-slate-200 ">
                <div className="text-4xl font-bold h-[15vh] flex justify-around items-center">
                    Workshops / Technical Workshops
                </div>
                <div className="flex justify-center gap-3 items-center">
                    <div className="w-[20%] flex justify-around items-center">
                        Technical Workshops
                    </div>
                    <div className="w-[20%] flex justify-around items-center">
                        Non- technical Workshops
                    </div>
                    <div className="w-[20%] flex justify-around items-center">
                        Events
                    </div>
                </div>
                {loading ? (
                    <div>Loading...........</div>
                ) : (
                    <InfiniteScroll
                        dataLength={count}
                        next={getWorkshops}
                        hasMore={workshops.length !== count}
                        loader={<div>Loading...........</div>}
                        className="flex justify-around items-center flex-col py-10 gap-5"
                    >
                        {workshops.map((workshop: EventDocument) => {
                            return <EventsCard key={workshop.id} />;
                        })}
                    </InfiniteScroll>
                )}
            </div>
        </>
    );
};

export default WorkshopsList;
