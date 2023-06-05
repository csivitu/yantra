import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import SDGAboutSection from '@/sections/sdg-landing-page-sections/sdgAboutSection';
import SDGHeroSection from '@/sections/sdg-landing-page-sections/sdgHeroSection';
import SDGPriceSection from '@/sections/sdg-landing-page-sections/sdgPrizeSection';
import SDGTimelineSection from '@/sections/sdg-landing-page-sections/sdgTimelineSection';
import SDGTracksSection from '@/sections/sdg-landing-page-sections/sdgTracksSection';
import React from 'react';

const Index = () => {
    return (
        <>
            <div className="h-max bg-landing-bg  bg-cover">
                <Header />
                <SDGHeroSection />
                <SDGAboutSection />
                <SDGTimelineSection />
                <SDGTracksSection />
                <SDGPriceSection />
                <Footer />
            </div> */}
            <Error statusCode={503} title="Page Under Construction :)" />
        </>
    );
};

export default Index;
