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

export default function Home() {
    useEffect(() => {
        const scrollPosition = Number(sessionStorage.getItem('scrollPosition'));
        if (scrollPosition) {
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
            sessionStorage.removeItem('scrollPosition');
        }
    });

    return (
        <>
            <div className="h-max bg-landing-bg  bg-cover">
                <Head>
                    <title>Yantra</title>
                </Head>
                <Header />
                <HeroSection />
                <AboutSection />
                <TimelineSection />
                <EventsSection />
                <PatronsSection />
                <AdvisorySection />
                <div className="w-full flex justify-center mt-12 mb-20">
                    <Link
                        href="/team"
                        className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-black group hover:bg-black"
                    >
                        <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </span>
                        <span className="relative">Meet the Team</span>
                    </Link>
                </div>

                {/* <div className="w-full flex gap-4 justify-center items-center text-center uppercase text-white font-bronson text-3xl pt-16 mb-20">
                    <div>Meet The Team</div>
                    <Image
                        className="w-6 h-6"
                        width={10000}
                        height={10000}
                        alt="/"
                        src={'/arrow.png'}
                    />
                </div> */}
                <Footer />
            </div>
        </>
    );
}
