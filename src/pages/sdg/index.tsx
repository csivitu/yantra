import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import SDGHeader from '@/components/common/sdgheader';
import SDGAboutSection from '@/sections/sdg-landing-page-sections/sdgAboutSection';
import SDGGuidelinesSection from '@/sections/sdg-landing-page-sections/sdgGuidelinesSection';
import SDGHeroSection from '@/sections/sdg-landing-page-sections/sdgHeroSection';
import SDGPrizeSection from '@/sections/sdg-landing-page-sections/sdgPrizeSection';
import SDGTimelineSection from '@/sections/sdg-landing-page-sections/sdgTimelineSection';
import SDGTracksSection from '@/sections/sdg-landing-page-sections/sdgTracksSection';
import Error from 'next/error';
import React from 'react';

const Index = () => {
    return (
        <>
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
