import React from 'react';
import Image from 'next/image';
import TrackCard from '@/components/uncommon/sdg-page-cards/trackCard';

const SDGTracksSection = () => {
    const tracks = [
        {
            name: 'Good HEalth and well being',
            rank: '1',
            text: 'text',
            colour: '279B48',
            iconSource: '/sdg-cards/GHAWB.svg',
        },
        {
            name: 'Industry, innovation and infrastructure',
            rank: '2',
            text: 'text',
            colour: 'FF8945',
            iconSource: '/sdg-cards/IIAI.svg',
        },
        {
            name: 'Quality Education',
            rank: '3',
            text: 'text',
            colour: 'C92639',
            iconSource: '/sdg-cards/QE.svg',
        },
        {
            name: 'reduced inequalities',
            rank: '4',
            text: 'text',
            colour: 'FF4FA9',
            iconSource: '/sdg-cards/RI.svg',
        },
        {
            name: 'Sustainable cities and communities',
            rank: '5',
            text: 'text',
            colour: 'FF9F03',
            iconSource: '/sdg-cards/SCAC.svg',
        },
        {
            name: 'responsible consumption and production',
            rank: '6',
            text: 'text',
            colour: 'E48E16',
            iconSource: '/sdg-cards/RCAP.svg',
        },
        {
            name: 'partnership for goals',
            rank: '7',
            text: 'text',
            colour: '33589C',
            iconSource: '/sdg-cards/PFG.svg',
        },
    ];
    return (
        <>
            <div className="w-full mt-20 max-md:text-4xl h-[20vh] flex justify-around items-center text-white font-bronson uppercase text-5xl font-extrabold  text-center">
                TRACKS
            </div>
            <div className="w-full lg:py-10 lg:px-8">
                <div className="w-full flex justify-center items-center flex-wrap gap-y-8 sm:gap-y-16 lg:gap-y-20 gap-x-8 lg:gap-x-7">
                    {tracks &&
                        tracks.map((el, index) => {
                            return (
                                <TrackCard
                                    key={index}
                                    name={el.name}
                                    rank={el.rank}
                                    text={el.text}
                                    colour={el.colour}
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
