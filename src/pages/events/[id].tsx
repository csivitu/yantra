import Header from '@/components/common/header';
import Loader from '@/components/common/loader';
import getHandler from '@/handlers/getHandler';
import EventSection from '@/sections/event-page-sections/eventSection';
import { GetServerSidePropsContext } from 'next';
import React, { useEffect, useState } from 'react';

interface Props {
    id: string;
}

const EventPage = ({ id }: Props) => {
    const [event, setEvent] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${id}`;
        getHandler(URL, false)
            .then((res) => {
                setEvent(res.data.event);
                setLoading(false);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [id]);

    return (
        <>
            <div className="h-max bg-events-bg  bg-cover">
                <Header />
                {loading ? (
                    <div className="w-full h-64 flex justify-center items-center">
                        <Loader />
                    </div>
                ) : (
                    <EventSection event={event} />
                )}
            </div>
        </>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { id } = context.query;
    return {
        props: { id },
    };
}

export default EventPage;
