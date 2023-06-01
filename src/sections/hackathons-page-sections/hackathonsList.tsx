import React, { useState, useEffect } from 'react';
import EventsCard from '@/components/uncommon/landing-page-cards/eventsCard';
import { EventDocument } from '@/models/eventModel';
import getHandler from '@/handlers/getHandler';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '@/components/common/loader';
import SearchBar from '@/components/common/searchBar';

const HackathonsList = () => {
    const [hackathons, setHackathons] = useState<EventDocument[]>([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const getHackathons = () => {
        getHandler(
            `${
                process.env.NEXT_PUBLIC_BASE_URL
            }/api/events?page=${page}&limit=${3}&type=1`,
            false
        )
            .then((res) => {
                setHackathons([...hackathons, ...res.data.events]);
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
        getHackathons();
    }, []);

    return (
        <>
            <div className="w-full h-max ">
                <div className="w-full  flex flex-col sm:flex-row items-center sm:px-20">
                    <div className="w-[40%]  font-spaceGrotesk uppercase text-6xl font-extrabold py-8 text-white">
                        Events
                    </div>
                    <div className="w-[90%] sm:w-[60%]">
                        <SearchBar />
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-around items-center">
                        <Loader />
                    </div>
                ) : (
                    <InfiniteScroll
                        dataLength={count}
                        next={getHackathons}
                        hasMore={hackathons.length !== count}
                        loader={<Loader />}
                        className="w-full flex justify-around items-center flex-col py-5 gap-5"
                    >
                        {hackathons.map((hackathon: EventDocument) => {
                            return <EventsCard key={hackathon.id} />;
                        })}
                    </InfiniteScroll>
                )}
            </div>
        </>
    );
};

export default HackathonsList;
