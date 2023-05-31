import PatronsCard from '@/components/uncommon/landing-page-cards/patronsCard';
import React from 'react';

const PatronsSection = () => {
    return (
        <>
            <div className="w-fit font-spaceGrotesk uppercase text-8xl font-extrabold m-auto pt-40 pb-20">
                Patrons
            </div>
            <div className="h-max flex justify-evenly gap-x-10 gap-y-10 px-20 items-center flex-wrap">
                <PatronsCard />
                <PatronsCard />
                <PatronsCard />
                <PatronsCard />
            </div>
        </>
    );
};

export default PatronsSection;
