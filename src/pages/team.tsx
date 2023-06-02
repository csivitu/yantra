import React from 'react';
import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import OCSection from '@/sections/team-page-sections/ocSection';
import OrganizersSection from '@/sections/team-page-sections/organizerSection';
import Head from 'next/head';

const Team = () => {
    return (
        <>
            <div className="h-max bg-events-bg bg-repeat-y bg-cover">
                <Head>
                    <title>Yantra | Team</title>
                </Head>
                <Header />
                {/* <OCSection /> */}
                <OrganizersSection />
                <Footer />
            </div>
        </>
    );
};

export default Team;
