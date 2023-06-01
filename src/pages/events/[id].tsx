import Header from '@/components/common/header';
import EventSection from '@/sections/event-page-sections/eventSection';
import React from 'react';

const EventPage = () => {
    return (
        <>
            <div className="h-max bg-events-bg  bg-cover">
                <Header />
                <EventSection />
            </div>
        </>
    );
};

export default EventPage;
