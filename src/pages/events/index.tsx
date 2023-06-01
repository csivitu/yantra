import Footer from '@/components/common/footer';
import HackathonsList from '@/sections/hackathons-page-sections/hackathonsList';
import Header from '@/components/common/header';
import React, { useEffect } from 'react';

const Hackathons = () => {
    return (
        <>
            <div className="h-max bg-events-bg  bg-cover">
                <Header />
                <HackathonsList />
            </div>
        </>
    );
};

export default Hackathons;
