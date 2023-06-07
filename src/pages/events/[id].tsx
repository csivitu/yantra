import Header from '@/components/common/header';
import Loader from '@/components/common/loader';
import getHandler from '@/handlers/getHandler';
import { EventType } from '@/models/eventModel';
import EventSection from '@/sections/event-page-sections/eventSection';
import { GetServerSidePropsContext } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
    id: string;
}

const initialState: EventType = {
    _id: '',
    title: '',
    coverPic: '',
    description: '',
    type: '',
    organisedBy: [],
    numberOfParticipants: 0,
    venue: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    link: '',
    studentCoordName: [''],
    studentCordNumber: [''],
};

const EventPage = ({ id }: Props) => {
    const [event, setEvent] = useState<EventType>(initialState);

    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${id}`;
        getHandler(URL)
            .then((res) => {
                setEvent(res.data.event);
                if (res.statusCode !== 200) router.push('/events');
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    }, [id]);

    return (
        <>
            <div className="h-screen bg-events-bg  bg-cover">
                <Head>
                    <title>Yantra | {event?.title}</title>
                </Head>
                <Header />
                {loading ? (
                    <div className="w-full h-64 flex justify-center items-center">
                        <Loader />
                    </div>
                ) : (
                    <> {event && <EventSection event={event} />}</>
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
