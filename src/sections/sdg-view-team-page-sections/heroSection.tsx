import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { TeamType } from '@/models/teamModel';
import mongoose from 'mongoose';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Loader from '@/components/common/loader';
import Toaster from '@/utils/toaster';
import patchHandler from '@/handlers/patchHandler';
import ProjectSubmission from '@/sections/sdg-view-team-page-sections/project-submission';
import EditSubmission from './edit-submission';
import ViewSubmission from './view-submission';

const HeroSection = () => {
    const router = useRouter();
    const [teamDetails, setTeamDetails] = useState<TeamType>({
        id: new mongoose.Schema.Types.ObjectId(''),
        title: '',
        members: [],
        isNameChanged: false,
        submission: new mongoose.Schema.Types.ObjectId(''),
    });
    const [loading, setLoading] = useState(true);
    const [changeTitle, setChangeTitle] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [isSubmission, setIsSubmission] = useState(false);
    const [toggleEdit, setToggleEdit] = useState(0);

    const { data: session } = useSession();
    useEffect(() => {
        if (session?.user) {
            if (!session.user.team) {
                Toaster.error(
                    'You are not a part of any team, contact the admin.'
                );
                router.push('/sdg');
            } else {
                setTeamDetails(session.user.team);
                setNewTitle(session.user.team.title);
                setLoading(false);
                if (session.user.team.submission) setIsSubmission(true);
            }
        }
    }, [session]);

    const handleChangeName = async () => {
        const toaster = Toaster.startLoad();
        const res = await patchHandler(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/team/changeName`,
            { title: newTitle }
        );
        if (res.status === 1) {
            const newTeamDetails = { ...teamDetails };
            newTeamDetails.title = newTitle;
            newTeamDetails.isNameChanged = true;
            setTeamDetails(newTeamDetails);
            Toaster.stopLoad(toaster, 'Name Changed', 1);
            setChangeTitle(false);
        } else {
            Toaster.stopLoad(toaster, 'Internal Server Error', 0);
        }
    };

    return (
        <>
            <div className="max-sm:px-8 sm:h-max sm:py-10 lg:h-[90vh] sm:px-20 py-10 flex flex-col gap-y-10 lg:flex-row justify-around items-center text-white">
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="lg:w-[60%] w-full h-full">
                            <div className=" h-[7.5vh] flex justify-start gap-2 items-center max-md:hidden">
                                <div
                                    onClick={() => router.push('/sdg')}
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
                                {changeTitle ? (
                                    <input
                                        type="text"
                                        className="focus:outline-none bg-none text-black w-full"
                                        value={newTitle}
                                        onChange={(el) =>
                                            setNewTitle(el.target.value)
                                        }
                                    />
                                ) : (
                                    <div>{teamDetails.title}</div>
                                )}

                                <Image
                                    src="/edit-button.svg"
                                    alt="Logo"
                                    height={1000000}
                                    width={100000}
                                    className={`w-6 h-6 object-contain cursor-pointer ${
                                        teamDetails.isNameChanged
                                            ? 'hidden'
                                            : changeTitle
                                            ? 'hidden'
                                            : ''
                                    }`}
                                    onClick={() => setChangeTitle(true)}
                                />

                                <Image
                                    src="/arrow.png"
                                    alt="Logo"
                                    height={1000000}
                                    width={100000}
                                    className={`w-6 h-6 object-contain cursor-pointer ${
                                        !changeTitle ? 'hidden' : ''
                                    }`}
                                    onClick={handleChangeName}
                                />
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
                                                        key={Math.random()}
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
                                                            {el.name}&nbsp;(
                                                            {el.regNo})
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[50%] h-full">
                            {isSubmission ? (
                                <>
                                    {toggleEdit === 0 ? (
                                        <ViewSubmission
                                            toggleEdit={setToggleEdit}
                                        />
                                    ) : (
                                        <EditSubmission
                                            toggleEdit={setToggleEdit}
                                        />
                                    )}
                                </>
                            ) : (
                                <ProjectSubmission />
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default HeroSection;
