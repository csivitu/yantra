import PatronsCard from '@/components/uncommon/landing-page-cards/patronsCard';
import React from 'react';
import Link from 'next/link';
const AdvisorySection = () => {
    const organizingCommittee = {
        1: {
            name: 'Dr. RAMBABU KODALI',
            position: 'VICE CHANCELLOR',
            photo: 'oc3.jpg',
        },
        2: {
            name: 'Dr. PARTHA SHARATHI MALLICK',
            position: 'PRO-VICE CHANCELLOR',
            photo: 'oc2.jpg',
        },
        3: {
            name: 'Dr. JAYABARATHI T',
            position: 'REGISTRAR',
            photo: 'oc1.jpg',
        },
    };

    const patronItems = Object.values(organizingCommittee);

    return (
        <>
            <div
                id="advisory-section"
                className="w-full mt-20 max-md:text-4xl h-[20vh] flex justify-around items-center text-white font-bronson uppercase text-5xl font-extrabold m-auto text-center"
            >
                ADVISORY COMMITTEE
            </div>
            <div className="h-max py-10  flex justify-evenly gap-y-10 items-center flex-wrap">
                {patronItems.map((patron, index) => (
                    <PatronsCard
                        key={index}
                        name={patron.name}
                        position={patron.position}
                        photo={patron.photo}
                    />
                ))}
            </div>{' '}
            {/* <div className="w-full flex justify-around items-center py-10">
                <Link
                    href="/team"
                    className="relative w-48 h-16 flex items-center justify-center px-5 py-3 overflow-hidden font-bold rounded-full group"
                >
                    <span className="w-96 h-96 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span className="absolute top-0 left-0 w-56 h-56 -mt-1 transition-all duration-500 ease-in-out -translate-x-96 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span className="font-spaceGrotesk text-xl font-bold flex justify-center items-center  relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900">
                        VIEW TEAM
                    </span>
                    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                </Link>
            </div> */}
        </>
    );
};

export default AdvisorySection;
