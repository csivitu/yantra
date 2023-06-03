import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import SDGAboutSection from '@/sections/sdg-landing-page-sections/sdgAboutSection';
import SDGHeroSection from '@/sections/sdg-landing-page-sections/sdgHeroSection';
import SDGTimelineSection from '@/sections/sdg-landing-page-sections/sdgTimelineSection';
import React from 'react';

const Index = () => {
    return (
        <>
            <Header />
            <SDGHeroSection />
            <SDGAboutSection />
            <SDGTimelineSection />
            <Footer />
        </>
    );
};

export default Index;
