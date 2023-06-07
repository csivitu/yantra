import PatronsCard from '@/components/uncommon/landing-page-cards/patronsCard';
import React from 'react';

const PatronsSection = () => {
    const patrons = {
        1: {
            name: 'Dr. G VISWANATHAN',
            position: 'CHANCELLOR',
            photo: 'patron1.jpg',
        },
        2: {
            name: 'Mr. SANKAR VISWANATHAN',
            position: 'VICE - PRESIDENT',
            photo: 'patron3.jpg',
        },
        3: {
            name: 'Dr. SEKAR VISWANATHAN',
            position: 'VICE - PRESIDENT',
            photo: 'patron4.png',
        },
        4: {
            name: 'Mr. G V SELVAM',
            position: 'VICE - PRESIDENT',
            photo: 'patron2.png',
        },
    };

    const patronItems = Object.values(patrons);

    return (
        <>
            <div
                id="patrons-section"
                className="w-fit text-white font-bronson uppercase text-5xl font-extrabold m-auto mt-40 md:mb-10 max-md:mt-20"
            >
                Patrons
            </div>
            <div className="h-max py-10 pb-10 text-white flex justify-evenly gap-y-10 items-center flex-wrap">
                {patronItems.map((patron, index) => (
                    <PatronsCard
                        key={index}
                        name={patron.name}
                        position={patron.position}
                        photo={patron.photo}
                    />
                ))}
            </div>
        </>
    );
};

export default PatronsSection;
