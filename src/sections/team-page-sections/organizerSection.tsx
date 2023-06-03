import PatronsCard from '@/components/uncommon/landing-page-cards/patronsCard';
import React from 'react';

const OrganizersSection = () => {
    const organizingCommittee = {
        1: {
            name: 'PRATHAM MISHRA',
            photo: 'pratham.jpg',
        },
        2: {
            name: 'SHREYAS NIMKAR',
            photo: 'oc1.jpg',
        },
    };

    const patronItems = Object.values(organizingCommittee);

    return (
        <>
            <div
                id="organizing-team"
                className="w-full mt-20 max-md:text-4xl h-[20vh] flex justify-around items-center text-white font-bronson uppercase text-5xl font-extrabold m-auto text-center"
            >
                ORGANIZERS
            </div>
            <div className="h-max py-10 pb-32 flex justify-evenly gap-y-10 items-center flex-wrap">
                {patronItems.map((patron, index) => (
                    <>
                        <PatronsCard
                            key={index}
                            name={patron.name}
                            position={''}
                            photo={`studentOC/${patron.photo}`}
                        />
                    </>
                ))}
            </div>
        </>
    );
};

export default OrganizersSection;
