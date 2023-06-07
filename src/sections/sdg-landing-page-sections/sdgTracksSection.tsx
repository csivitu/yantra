import React from 'react';
import Image from 'next/image';
import TrackCard from '@/components/common/trackCard';

const SDGTracksSection = () => {
    const prizes = [
        {
            name: 'FIRST PRIZE',
            amount: '1000',
            text: 'text',
            iconSource: '/gold-trophy.png',
        },
        {
            name: 'FIRST PRIZE',
            amount: '1000',
            text: 'text',
            iconSource: '/gold-trophy.png',
        },
        {
            name: 'FIRST PRIZE',
            amount: '1000',
            text: 'text',
            iconSource: '/gold-trophy.png',
        },
    ];
    return (
        <>
            <div className="w-full mt-20 max-md:text-4xl h-[20vh] flex justify-around items-center text-white font-bronson uppercase text-5xl font-extrabold m-auto text-center">
                TRACKS
            </div>
            <div className="w-full lg:py-10 lg:px-24">
                <div className="w-full flex justify-center items-center flex-wrap gap-y-8 sm:gap-y-16 lg:gap-y-20 gap-x-8 lg:gap-x-6">
                    <TrackCard />
                    <TrackCard />
                    <TrackCard />
                    <TrackCard />
                    <TrackCard />
                </div>
                <div>asd</div>
            </div>
        </>
    );
};

export default SDGTracksSection;
