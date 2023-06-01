import React, { useState, useEffect } from 'react';
import EventsCard from '@/components/uncommon/landing-page-cards/eventsCard';
import { EventDocument } from '@/models/eventModel';
import getHandler from '@/handlers/getHandler';
import Loader from '@/components/common/loader';
import SearchBar from '@/components/common/searchBar';

interface Props {
    search: string;
}

const SearchHackathonsList = ({ search }: Props) => {
    const [hackathons, setHackathons] = useState<EventDocument[]>([]);
    const [loading, setLoading] = useState(true);

    const getHackathons = () => {
        getHandler(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/events/search?search=${search}`,
            false
        )
            .then((res) => {
                setHackathons(res.data.events);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        getHackathons();
    }, [search]);

    return (
        <>
            <div className="w-full h-max ">
                <div className="w-full px-32 flex items-center">
                    <div className="w-full font-spaceGrotesk uppercase text-6xl font-extrabold py-8 text-white">
                        Events
                    </div>
                    <SearchBar initialSearch={search} />
                </div>

                {loading ? (
                    <div className="flex justify-around items-center">
                        <Loader />
                    </div>
                ) : (
                    <div className="w-full flex justify-around items-center flex-col py-5 gap-5">
                        {hackathons.length > 0 ? (
                            <>
                                {hackathons.map((hackathon: EventDocument) => {
                                    return (
                                        <EventsCard
                                            key={hackathon.id}
                                            event={hackathon}
                                        />
                                    );
                                })}
                            </>
                        ) : (
                            <div className="text-white text-4xl font-spaceGrotesk pt-32">
                                No Results for this Search :)
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default SearchHackathonsList;
