import Footer from '@/components/common/footer';
import HackathonsList from '@/sections/hackathons-page-sections/hackathonsList';
import Header from '@/components/common/header';
import React from 'react';

const hackathons = () => {
    return (
        <>
            <Header />
            <HackathonsList />
            <Footer />
        </>
    );
};

export default hackathons;
