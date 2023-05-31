import PatronsCard from '@/components/uncommon/landing-page-cards/patronsCard';
import React from 'react';

const PatronsSection = () => {
    return (
        <>
            <div
                id="patrons-section"
                className="h-[20vh] bg-transparent text-4xl text-center flex justify-around items-center"
            >
                PATRONS
            </div>
            <div className="h-max  py-10 flex justify-evenly gap-x-10 gap-y-10 px-20 items-center flex-wrap">
                <PatronsCard />
                <PatronsCard />
                <PatronsCard />
                <PatronsCard />
            </div>
        </>
    );
};

export default PatronsSection;
