import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { TeamType } from '@/models/teamModel';
import mongoose from 'mongoose';

const HeroSection = () => {
    const [teamDetails, setTeamDetails] = useState<TeamType>({
        id: new mongoose.Schema.Types.ObjectId(''),
        title: '',
        members: [],
        isNameChanged: false,
        submission: new mongoose.Schema.Types.ObjectId(''),
    });

    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user) setTeamDetails(session?.user.team);
    }, [session]);
    return (
        <>
            {' '}
            <div className="flex flex-col h-contain mt-[10%] gap-y-12">
                <div className="flex flex-col">
                    <h1
                        className={`text-white lg:text-5xl text-3xl font-bold sm:text-center text-left pb-2 px-12 $`}
                    >
                        <span className="pb-8 block">
                            <span className="text-yellow">HACK YOUR WAY </span>
                            THROUGH A WORLD,
                        </span>
                        <span className="text-white">
                            WHERE INNOVATION WRITES YOUR
                        </span>
                        <span className="text-yellow"> NEXT CHAPTER</span>
                    </h1>
                </div>
            </div>
            <div className="bg-white mt-24 rounded-[5px] mx-[10%] py-8 flex md:flex-row flex-col justify-around">
                <div className={`px-10 py-4  text-3xl flex flex-col `}>
                    <div className="flex gap-x-2">
                        <p>Team - asd</p>
                        <span className="text-logo"></span>
                    </div>
                    <div className={`py-4  sm:text-2xl text-xl flex-col gap-4`}>
                        <p>Members :</p>
                    </div>
                </div>
                <div className="flex flex-col sm:py-6 gap-y-2 px-10 md:px-0">
                    <div
                        className={`pr-10  py-4  sm:text-2xl text-xl flex sm:flex-row flex-col gap-1`}
                    >
                        <p>{'Team Code :'}</p>
                        <p>asd</p>
                    </div>
                    <div>
                        <a
                            className={`bg-yellow px-4 py-2 my-2 sm:text-xl text-lg rounded-[15px] cursor-pointer $`}
                        >
                            {'Leave Team :('}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
