import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { TeamType } from '@/models/teamModel';
import mongoose from 'mongoose';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
const HeroSection = () => {
    const router = useRouter();
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
            <div className="h-[60vh] lg:h-[90vh] sm:px-20 py-10 flex justify-around items-center text-white">
                <div className="lg:w-[60%] h-full">
                    <div className=" h-[7.5vh] flex justify-start gap-2 items-center max-md:hidden">
                        <div
                            onClick={() => router.back()}
                            className="flex justify-start gap-2 items-center cursor-pointer"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="cursor-pointer"
                            >
                                <path
                                    d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <div className="cursor-pointer"></div>
                            Back
                        </div>
                    </div>{' '}
                    <div className="h-fit flex justify-start items-center gap-x-3 text-5xl text-white font-bronson max-md:my-4 max-md:text-4xl">
                        <div>{teamDetails.title}</div>
                        <div>
                            <Image
                                src="/edit-button.svg"
                                alt="Logo"
                                height={1000000}
                                width={100000}
                                className="w-6 h-6 object-contain cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-col gap-4 max-md:w-full max-md:justify-between pt-6">
                        <div className="h-max">
                            <div className="text-sm font-spaceGrotesk text-white opacity-[0.4]">
                                MEMBERS
                            </div>
                            {teamDetails.members &&
                                teamDetails.members.map((el, index) => {
                                    return (
                                        <>
                                            <div
                                                key={el.regNo}
                                                className="text-xl py-1 flex justify-start items-center gap-x-2 font-spaceGrotesk"
                                            >
                                                <div>
                                                    <Image
                                                        src="/user-icon.svg"
                                                        alt="Logo"
                                                        height={1000000}
                                                        width={100000}
                                                        className="w-4  h-4  object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    {el.name}&nbsp;({el.regNo})
                                                </div>
                                            </div>
                                        </>
                                    );
                                })}
                        </div>
                    </div>
                    <Link
                        href="https://vtop.vit.ac.in/"
                        className="relative w-[70%] sm:w-[50%] lg:w-[40%] h-12 mt-4 flex items-center justify-center px-5 py-3 overflow-hidden font-bold rounded-full group"
                    >
                        <span className="w-96 h-96 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-96 h-56 -mt-1 transition-all duration-500 ease-in-out -translate-x-96 -translate-y-24 bg-white opacity-100 group-hover:translate-x-0"></span>
                        <span className="font-spaceGrotesk text-lg font-bold flex justify-center items-center  relative w-full text-left text-white transition-colors gap-x-3 duration-300 ease-in-out group-hover:text-gray-900">
                            <div>
                                <Image
                                    src="/plus-icon.svg"
                                    alt="Logo"
                                    height={1000000}
                                    width={100000}
                                    className="w-6 h-6 object-contain cursor-pointer group-hover:hidden"
                                />
                            </div>
                            <div>Submit Project</div>
                        </span>
                        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                    </Link>
                </div>
                <div className="w-[40%] lg:block hidden h-full"></div>
            </div>
        </>
    );
};

export default HeroSection;
