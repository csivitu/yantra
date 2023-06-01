import Button from '@/components/common/button';
import PatronsCard from '@/components/uncommon/landing-page-cards/patronsCard';
import React from 'react';

const PatronsSection = () => {
    return (
        <>
            <div
                id="patrons-section"
                className="w-fit text-white font-bronson uppercase text-5xl font-extrabold m-auto pt-40 pb-20"
            >
                Patrons
            </div>
            <div className="h-max flex justify-evenly gap-x-10 gap-y-10 px-20 items-center flex-wrap">
                <PatronsCard />
                <PatronsCard />
                <PatronsCard />
                <PatronsCard />
            </div>
            <Button />
        </>
    );
};

export default PatronsSection;
