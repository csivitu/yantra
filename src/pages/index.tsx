import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import EventsSection from '@/sections/landing-page-sections/eventsSection';
import PatronsSection from '@/sections/landing-page-sections/patronsSection';
import TimelineSection from '@/sections/landing-page-sections/timelineSection';
import { useEffect, useState } from 'react';
import HeroSection from '@/sections/landing-page-sections/heroSection';
import AboutSection from '@/sections/landing-page-sections/aboutSection';
import AdvisorySection from '@/sections/landing-page-sections/advisorySection';
import Head from 'next/head';
import MeetTheTeamButton from '@/components/uncommon/landing-page-cards/meetTheTeamButton';
import FullPageLoader from '@/components/common/fullPageLoader';

export default function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 5000);
        return () => {
            sessionStorage.removeItem('scrollPosition');
        };
    });

    return (
        <>
            <Head>
                <title>Yantra</title>
            </Head>

            <FullPageLoader loading={loading} />

            <div
                className={`h-max bg-landing-bg  bg-cover transition-all ease-in-out duration-200 ${
                    loading ? 'opacity-0' : 'opacity-100'
                }`}
            >
                <Header />
                <HeroSection />
                <AboutSection />
                <TimelineSection />
                <EventsSection />
                <PatronsSection />
                <AdvisorySection />
                <MeetTheTeamButton />
                <Footer />
            </div>
        </>
    );
}
