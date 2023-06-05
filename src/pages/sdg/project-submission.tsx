import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import HeroSection from '@/sections/project-submission-page-sections/HeroSection';
import React from 'react';

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

export default ProjectSubmission;
