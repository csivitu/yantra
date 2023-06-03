import React, { useState, useEffect } from 'react';
import EventsCard from '@/components/uncommon/landing-page-cards/eventsCard';
import { EventType } from '@/models/eventModel';
import getHandler from '@/handlers/getHandler';
import Loader from '@/components/common/loader';
import SearchBar from '@/components/common/searchBar';
import Back from '@/components/common/back';
import { useRouter } from 'next/router';

interface Props {
    search: string;
    type: [string];
}

const SearchHackathonsList = ({ search, type }: Props) => {
    const [hackathons, setHackathons] = useState<EventType[]>([]);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    const getHackathons = () => {
        let URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/events/search`;

        const pattern = /[^a-zA-Z0-9 ]/;

        if (pattern.test(search)) return router.push('/events');

        type.forEach((el, index) => {
            if (index === 0) URL += `?type=${el}`;
            else URL += `&type=${el}`;
        });
        URL += `&search=${search}`;

        getHandler(URL, false)
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
    }, [search, type]);

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
                        <SearchBar initialSearch={search} />
                    </div>
                </div>

                {loading ? (
                    <div className="w-full h-48 flex justify-center items-center">
                        <Loader />
                    </div>
                ) : (
                    <div className="w-full flex justify-around items-center flex-col py-5 gap-5">
                        {hackathons.length > 0 ? (
                            <>
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
                            </>
                        ) : (
                            <div className="text-white text-4xl font-spaceGrotesk px-20 pt-32">
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
