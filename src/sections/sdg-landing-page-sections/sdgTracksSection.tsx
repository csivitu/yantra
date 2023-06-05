import React from 'react';
import Image from 'next/image';
import TrackCard from '@/components/uncommon/sdg-page-cards/trackCard';

const SDGTracksSection = () => {
    const tracks = [
        {
            name: 'Good HEalth and well being',
            amount: '1000',
            text: 'text',
            iconSource: '/sdg-cards/GHAWB.png',
        },
        {
            name: 'Industry, innovation and infrastructure',
            amount: '1000',
            text: 'text',
            iconSource: '/sdg-cards/IIAI.svg',
        },
        {
            name: 'Quality Education',
            amount: '1000',
            text: 'text',
            iconSource: '/gold-trophy.png',
        },
        {
            name: 'reduced inequalities',
            amount: '1000',
            text: 'text',
            iconSource: '/gold-trophy.png',
        },
        {
            name: 'Sustainable cities and communities',
            amount: '1000',
            text: 'text',
            iconSource: '/gold-trophy.png',
        },
        {
            name: 'responsible consumption and production',
            amount: '1000',
            text: 'text',
            iconSource: '/gold-trophy.png',
        },
        {
            name: 'partnership for goals',
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
                    {tracks &&
                        tracks.map((el, index) => {
                            return (
                                <TrackCard
                                    key={index}
                                    name={el.name}
                                    amount={el.amount}
                                    text={el.text}
                                    iconSource={el.iconSource}
                                />
                            );
                        })}
                </div>
                <div>asd</div>
            </div>
        </>
    );
};

export default SDGTracksSection;
