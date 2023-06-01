import PatronsCard from '@/components/uncommon/landing-page-cards/patronsCard';
import React from 'react';

const OrganizersSection = () => {
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
            position: 'REGISTRAR',
            photo: 'oc3.jpg',
        },
    };

    const patronItems = Object.values(organizingCommittee);

    return (
        <>
            <div
                id="patrons-section"
                className="w-fit mt-10 text-white font-bronson uppercase text-5xl font-extrabold m-auto pt-20 pb-20"
            >
                ADVISORY COMMITTEE
            </div>
            <div className="h-max py-10 pb-32 flex justify-evenly gap-y-10 items-center flex-wrap">
                {patronItems.map((patron, index) => (
                    <>
                        <PatronsCard
                            key={index}
                            name={patron.name}
                            position={patron.position}
                            photo={patron.photo}
                        />
                    </>
                ))}
            </div>
        </>
    );
};

export default OrganizersSection;
