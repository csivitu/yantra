import Button from '@/components/common/button';
import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import EventsSection from '@/components/sections/landing-page-sections/eventsSection';
import PatronsSection from '@/components/sections/landing-page-sections/patronsSection';
import TimelineSection from '@/components/sections/landing-page-sections/timelineSection';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import getHandler from '@/handlers/getHandler';
import Cookies from 'js-cookie';
import { GetServerSidePropsContext } from 'next';

export default function Home({ redirect }) {
    useEffect(() => {
        console.log(redirect);
        if (redirect) {
            getHandler(
                `https://a167-157-51-41-253.ngrok-free.app/auth/user/${Cookies.get(
                    'token'
                )}`,
                true
            )
                .then((res) => {
                    console.log(res);
                    Cookies.set('name', res.data.user.name);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    return (
        <>
            <Header />
            <EventsSection />
            <TimelineSection />
            <PatronsSection />
            <Footer />
        </>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { redirect } = context.query;
    if (redirect)
        return {
            props: { redirect: true },
        };
    return {
        props: {
            redirect: false,
        },
    };
}
