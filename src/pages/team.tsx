import React from 'react';
import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import HeroSection from '@/components/sections/team-page-sections/heroSection';
import CarouselSection from '@/components/sections/team-page-sections/carouselSection';

const Team = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <CarouselSection />
            <Footer />
        </>
    );
};

export default Team;
