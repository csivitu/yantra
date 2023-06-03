import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import SDGAboutSection from '@/sections/sdg-landing-page-sections/sdgAboutSection';
import SDGHeroSection from '@/sections/sdg-landing-page-sections/sdgHeroSection';
import SDGPriceSection from '@/sections/sdg-landing-page-sections/sdgPrizeSection';
import SDGTimelineSection from '@/sections/sdg-landing-page-sections/sdgTimelineSection';
import React from 'react';

const Index = () => {
    return (
        <>
            <Header />
            <SDGHeroSection />
            <SDGAboutSection />
            <SDGTimelineSection />
            <SDGPriceSection />
            <Footer />
        </>
    );
};

export default Index;
