import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import SDGHeader from '@/components/common/sdgheader';
import HeroSection from '@/sections/sdg-view-team-page-sections/heroSection';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import React from 'react';

const ViewTeam = () => {
    return (
        <>
            <div className="min-h-[90vh] bg-events-bg bg-cover">
                <SDGHeader />
                <HeroSection />
            </div>
        </>
    );
};

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/sdg',
            },
        };
    }
    return {
        props: {},
    };
};

export default ViewTeam;
