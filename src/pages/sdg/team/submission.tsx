import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import HeroSection from '@/sections/project-submission-page-sections/HeroSection';
import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
const ProjectSubmission = () => {
    return (
        <>
            <div className="h-max  bg-events-bg bg-repeat-y bg-cover">
                <Header />
                <HeroSection />
                <Footer />
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
export default ProjectSubmission;
