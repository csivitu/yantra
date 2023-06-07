import React, { useState, useEffect } from 'react';
import EventsCard from '@/components/uncommon/landing-page-cards/eventsCard';
import { EventType } from '@/models/eventModel';
import getHandler from '@/handlers/getHandler';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '@/components/common/loader';
import SearchBar from '@/components/common/searchBar';
import Back from '@/components/common/back';
import { NO_OF_EVENTS } from '@/constants';

const HackathonsList = () => {
    const [hackathons, setHackathons] = useState<EventType[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const getHackathons = () => {
        getHandler(
            `${
                process.env.NEXT_PUBLIC_BASE_URL
            }/api/events?page=${page}&limit=${40}`,
            false
        )
            .then((res) => {
                setHackathons([...hackathons, ...res.data.events]);
                setPage((prev) => prev + 1);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getHackathons();
    }, []);

    useEffect(() => {
        if (!loading) {
            const scrollPosition = Number(
                sessionStorage.getItem('scrollPosition')
            );
            if (scrollPosition) {
                window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
                sessionStorage.removeItem('scrollPosition');
            }
        }
    }, [loading]);

    return (
        <>
            <div className="w-full h-max">
                <div className="w-full lg:px-32 flex items-center max-md:flex-col">
                    <div className="lg:w-[40%] flex items-center gap-2 font-spaceGrotesk uppercase text-6xl font-extrabold py-8 text-white">
                        <Back />
                        <div>Events</div>
                    </div>
                    <div className="w-[90%] lg:w-[60%]">
                        <SearchBar initialSearch="" />
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-around items-center">
                        <Loader />
                    </div>
                ) : (
                    <div className="w-full flex justify-around items-center flex-col py-5 gap-5">
                        {hackathons.map(
                            (hackathon: EventType, index: number) => {
                                return (
                                    <EventsCard
                                        key={`${hackathon._id}-${index}`}
                                        event={hackathon}
                                    />
                                );
                            }
                        )}
                    </div>
                    // <InfiniteScroll
                    //     dataLength={hackathons.length}
                    //     next={getHackathons}
                    //     hasMore={hackathons.length !== NO_OF_EVENTS}
                    //     loader={<Loader />}
                    //     className="w-full flex justify-around items-center flex-col py-5 gap-5"
                    // >
                    //     {hackathons.map(
                    //         (hackathon: EventType, index: number) => {
                    //             return (
                    //                 <EventsCard
                    //                     key={`${hackathon._id}-${index}`}
                    //                     event={hackathon}
                    //                 />
                    //             );
                    //         }
                    //     )}
                    // </InfiniteScroll>
                )}
            </div>
        </>
    );
};

export default HackathonsList;
