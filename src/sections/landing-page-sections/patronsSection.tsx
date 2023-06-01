import Button from '@/components/common/button';
import PatronsCard from '@/components/uncommon/landing-page-cards/patronsCard';
import React from 'react';

const PatronsSection = () => {
    const patrons = {
        1: {
            name: 'G VISHWANATHAN',
            position: 'CHANCELLOR',
            photo: 'patron1.jpg',
        },
        2: {
            name: 'SEKAR VISHWANATHAN',
            position: 'VICE - PRESIDENT',
            photo: 'patron2.png',
        },
        3: {
            name: 'G V SELVAM',
            position: 'VICE - PRESIDENT',
            photo: 'patron3.png',
        },
        4: {
            name: 'SANKAR VISHWANATHAN',
            position: 'VICE - PRESIDENT',
            photo: 'patron4.png',
        },
    };

    const patronItems = Object.values(patrons);

    return (
        <>
            <div
                id="patrons-section"
                className="w-fit text-white font-bronson uppercase text-5xl font-extrabold m-auto pt-20 pb-20"
            >
                Patrons
            </div>
            <div className="h-max py-10 pb-32 flex justify-evenly gap-y-10 items-center flex-wrap">
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
