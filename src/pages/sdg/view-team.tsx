import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import HeroSection from '@/sections/sdg-view-team-page-sections/heroSection';
import React from 'react';

const ViewTeam = () => {
    return (
        <>
            <div className="h-max bg-events-bg  bg-cover">
                <Header />
                <HeroSection />
                <Footer />
            </div>
        </>
    );
};

export default ViewTeam;
