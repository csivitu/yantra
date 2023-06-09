import React from 'react';
import Image from 'next/image';
import TrackCard from '@/components/uncommon/sdg-page-cards/trackCard';

const SDGTracksSection = () => {
    const tracks = [
        {
            name: 'Good HEalth and well being',
            rank: '1',
            text: 'Welcome to a track pulsating with vitality! Here, we navigate the nexus of technology and health, exploring how digital innovation can empower us all to live healthier, happier lives. Are you ready to step into the world of wellness?',
            colour: '#279B48',
            iconSource: '/sdg-cards/GHAWB.svg',
            statements: [
                'Elderly loneliness',
                'App related to educating, providing and ensuring a balanced diet',
                'Keeping a check on addiction',
                'Ease disabilities app',
                'Healthcare facilitation in rural areas',
            ],
        },
        {
            name: 'Quality Education',
            rank: '2',
            text: 'Open the door to a realm of knowledge! This track immerses you in the educational landscape, inviting you to think about how technology can play a part in shaping future learners. Ready to embark on this educational odyssey?',
            colour: '#C92639',
            iconSource: '/sdg-cards/QE.svg',
            statements: [
                'Assure that a person with certifications also has the skills',
                'Ensure slow learners learn',
                'To break the taboo',
                'Career switch helper (roadmaps/people connect/updates in the industry)',
                'AR/VR concept explanation',
            ],
        },
        {
            name: 'Industry, innovation and infrastructure',
            rank: '3',
            text: 'Step into a world of gears and grids! This track is all about diving into the heart of industry, unearthing the potential of innovation, and laying the groundwork for a prosperous future. Get set to engineer your impact!',
            colour: '#FF8945',
            iconSource: '/sdg-cards/IIAI.svg',
            statements: ['Open innovation'],
        },
        {
            name: 'reduced inequalities',
            rank: '4',
            text: 'Embark on a journey towards justice! This track delves into the struggle for equality, asking you to consider how technology might level the playing field. Are you prepared to code for a cause?',
            colour: '#FF4FA9',
            iconSource: '/sdg-cards/RI.svg',
            statements: [
                'Removing gender stereotypes',
                'Accessing education for the underprivileged',
                'Provide equal access to finance',
                'Reduce gender inequality in pay based on performance check',
                'Educational reservation',
            ],
        },
        {
            name: 'Sustainable cities and communities',
            rank: '5',
            text: "Welcome to the blueprint of tomorrow! This track explores the intricacies of sustainable urban and community development. How can technology help us build the cities and communities of the future? Let's find out!",
            colour: '#FF9F03',
            iconSource: '/sdg-cards/SCAC.svg',
            statements: ['Open innovation'],
        },
        {
            name: 'responsible consumption and production',
            rank: '6',
            text: 'Step onto the green stage! This track delves into the delicate balance of consumption and production, examining how technology can contribute to a sustainable economy. Are you ready to compute for the planet?',
            colour: '#E48E16',
            iconSource: '/sdg-cards/RCAP.svg',
            statements: [
                'Empowering underrepresented groups',
                'Equal learning opportunities.',
                'Affordable banking services.',
                'Fair compensation practices.',
                'Supporting underprivileged communities',
            ],
        },
    ];
    return (
        <>
            <div
                id="tracks-section"
                className="w-full mt-20 max-md:text-4xl h-[20vh] flex justify-around items-center text-white font-bronson uppercase text-5xl font-extrabold  text-center"
            >
                TRACKS
            </div>
            <div className="w-full lg:py-10 lg:px-0">
                <div className="w-full flex justify-center items-center flex-wrap gap-y-10 sm:gap-y-16 lg:gap-y-20 gap-x-8 lg:gap-x-4">
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
                                    statements={el.statements}
                                />
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default SDGTracksSection;
