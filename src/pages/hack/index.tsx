import Footer from '@/components/common/footer';
import FullPageLoader from '@/components/common/fullPageLoader';
import Header from '@/components/common/header';
import SDGHeader from '@/components/common/sdgheader';
import SDGAboutSection from '@/sections/sdg-landing-page-sections/sdgAboutSection';
import SDGGuidelinesSection from '@/sections/sdg-landing-page-sections/sdgGuidelinesSection';
import SDGHeroSection from '@/sections/sdg-landing-page-sections/sdgHeroSection';
import SDGPrizeSection from '@/sections/sdg-landing-page-sections/sdgPrizeSection';
import SDGTimelineSection from '@/sections/sdg-landing-page-sections/sdgTimelineSection';
import SDGTracksSection from '@/sections/sdg-landing-page-sections/sdgTracksSection';
import Error from 'next/error';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const Index = () => {
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
                <title>Yantra | SDG Hackathon</title>
            </Head>
            <FullPageLoader loading={loading} />
            <div className="h-max bg-landing-bg  bg-cover">
                <SDGHeader />
                <SDGHeroSection />
                <SDGAboutSection />
                <SDGTimelineSection />
                <SDGTracksSection />
                <SDGPrizeSection />
                <SDGGuidelinesSection />
                <Footer />
            </div>
        </>
    );
};

export default Index;
