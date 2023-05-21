import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import EventsSection from '@/components/sections/landing-page-sections/eventsSection';
import PatronsSection from '@/components/sections/landing-page-sections/patronsSection';
import TimelineSection from '@/components/sections/landing-page-sections/timelineSection';
import ReactGA from 'react-ga';
import { useEffect, useState } from 'react';
export default function Home() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
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
