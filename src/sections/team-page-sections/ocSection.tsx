import PatronsCard from '@/components/uncommon/landing-page-cards/patronsCard';
import React from 'react';
import Link from 'next/link';
const OCSection = () => {
    const organizingCommittee = {
        1: {
            name: 'PARTHA SHARATHI MALLICK',
            position: 'PRO-VICE CHANCELLOR',
            photo: 'oc2.jpg',
        },
        2: {
            name: 'JAYABARATHI T',
            position: 'REGISTRAR',
            photo: 'oc1.jpg',
        },
        3: {
            name: 'RAMBABU KODALI',
            position: 'VICE CHANCELLOR',
            photo: 'oc3.jpg',
        },
    };
    const organizingCommitteeItems = Object.values(organizingCommittee);

    return (
        <>
            <div
                id="organizing-committee-section"
                className="w-fit text-white font-bronson uppercase text-5xl font-extrabold m-auto pt-20 pb-20"
            >
                ORGANIZING COMMITTEE
            </div>
            <div className="h-max py-10 pb-32 flex justify-evenly text-black gap-y-10 items-center flex-wrap">
                {organizingCommitteeItems.map((el, index) => (
                    <PatronsCard
                        key={index}
                        name={el.name}
                        position={el.position}
                        photo={el.photo}
                    />
                ))}
            </div>{' '}
        </>
    );
};

export default OCSection;
