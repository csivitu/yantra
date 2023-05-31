import Footer from '@/components/common/footer';
import HackathonsList from '@/sections/hackathons-page-sections/hackathonsList';
import Header from '@/components/common/header';
import React from 'react';

const hackathons = () => {
    return (
        <>
            <div className="h-max bg-grid-bg bg-repeat-y bg-contain">
                <Header />
                <HackathonsList />
                <Footer />
            </div>
        </>
    );
};

export default hackathons;
