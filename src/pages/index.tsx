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

export default function Home() {
    useEffect(() => {}, []);

    return (
        <>
            <div className="h-max bg-landing-bg  bg-cover">
                <Header />
                <HeroSection />
                <AboutSection />
                <TimelineSection />
                <EventsSection />
                <PatronsSection />
                {/* <SponsorsSection /> */}
                <Footer />
            </div>
        </>
    );
}
