import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import EventsSection from '@/sections/landing-page-sections/eventsSection';
import PatronsSection from '@/sections/landing-page-sections/patronsSection';
import TimelineSection from '@/sections/landing-page-sections/timelineSection';
import ReactGA from 'react-ga';
import { useEffect, useState } from 'react';
import HeroSection from '@/sections/landing-page-sections/heroSection';
import AboutSection from '@/sections/landing-page-sections/aboutSection';
import SponsorsSection from '@/sections/landing-page-sections/sponsorsSection';
import OCSection from '@/sections/team-page-sections/ocSection';
import AdvisorySection from '@/sections/landing-page-sections/advisorySection';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/dist/client/link';
import MeetTheTeamButton from '@/components/uncommon/landing-page-cards/meetTheTeamButton';
import FullPageLoader from '@/components/common/fullPageLoader';

export default function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 4000);
        const scrollPosition = Number(sessionStorage.getItem('scrollPosition'));
        if (scrollPosition) {
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
            sessionStorage.removeItem('scrollPosition');
        }
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
