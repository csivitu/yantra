import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Loader from '@/components/common/loader';
import { getSession, useSession } from 'next-auth/react';
import mongoose from 'mongoose';
import {
    SubmissionPopulatedTeam,
    SubmissionTypeTeam,
    TeamType,
} from '@/models/teamModel';
import Toaster from '@/utils/toaster';
import ViewSubmission from '@/sections/admin-page-sections/admin-view-submission';
import Header from '@/components/common/header';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import getHandler from '@/handlers/getHandler';
import patchHandler from '@/handlers/patchHandler';
import { CURRENT_ROUND } from '@/constants';
import CommentView from '@/sections/admin-page-sections/admin-view-comment';
import CommentEdit from '@/sections/admin-page-sections/admin-edit-comment copy';

interface Props {
    id: string;
}

const ProjectReviewPage = ({ id }: Props) => {
    const [teamDetails, setTeamDetails] = useState<SubmissionTypeTeam>({
        id: new mongoose.Schema.Types.ObjectId(''),
        title: '',
        members: [],
        submission: {
            _id: '',
            id: new mongoose.Schema.Types.ObjectId(''),
            status: 0,
            submittedAt: new Date(),
            title: '',
            description: '',
            track: 0,
            links: [],
            files: [],
            round1Score: 0,
            round1Judge: '',
            round1Comment: '',
            round2Score: 0,
            round2Judge: '',
            round2Comment: '',
            round3Score: 0,
            round3Judge: '',
            round3Comment: '',
        },
        _id: '',
    });
    const [loading, setLoading] = useState(true);

    const [comment, setComment] = useState('');

    const [score, setScore] = useState(0);

    useEffect(() => {
        getHandler(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/team/${id}`)
            .then((res) => {
                console.log(res.data.team);
                setTeamDetails(res.data.team);
                if (res.data.team.submission)
                    if (res.data.team.submission.title) {
                        if (CURRENT_ROUND === 1) {
                            console.log(res.data.team.submission);
                            setComment(res.data.team.submission.round1Comment);
                            setScore(res.data.team.submission.round1Score);
                        } else if (CURRENT_ROUND === 2) {
                            setComment(res.data.team.submission.round2Comment);
                            setScore(res.data.team.submission.round2Score);
                        } else if (CURRENT_ROUND === 3) {
                            setComment(res.data.team.submission.round3Comment);
                            setScore(res.data.team.submission.round3Score);
                        }
                    }

                setLoading(false);
            })
            .catch((err) => {
                Toaster.error('Internal Server Error');
                console.log(err);
            });
    }, []);

    const { data: session } = useSession();

    const router = useRouter();

    const handleSubmit = async () => {
        if (score > 10) {
            Toaster.error('Score cannot be more than 10');
            return;
        }
        let formData = {};

        alert(teamDetails.submission.status);

        // if (teamDetails.submission.status !== CURRENT_ROUND - 1)
        //     if (teamDetails.submission.status !== CURRENT_ROUND) {
        //         Toaster.error('Invalid Submission.');
        //         return;
        //     }
        if (CURRENT_ROUND === 1)
            formData = {
                round1Score: score,
                round1Comment: comment,
                round1Judge: session?.user.name,
            };
        else if (CURRENT_ROUND === 2)
            formData = {
                round2Score: score,
                round2Comment: comment,
                round2Judge: session?.user.name,
            };
        else if (CURRENT_ROUND === 3)
            formData = {
                round3Score: score,
                round3Comment: comment,
                round3Judge: session?.user.name,
            };

        const statusObj = {
            status: CURRENT_ROUND,
        };

        const res = await patchHandler(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/submission/${id}`,
            { ...formData, ...statusObj }
        );

        if (res.status === 1) Toaster.success('Response Submitted');
        else {
            Toaster.error(res.data);
            console.log(res);
        }
    };

    return (
        <>
            <Header />
            <div className="max-sm:px-8 sm:h-max  lg:h-[90vh] sm:px-20  flex flex-col gap-y-10 lg:flex-row justify-around items-center text-white">
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="lg:w-[50%] w-full h-full">
                            <div className=" h-[7.5vh] w-full flex justify-start gap-2 items-center max-md:hidden">
                                <div
                                    onClick={() => router.push('/hack/admin')}
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
                            {teamDetails.submission ? (
                                <div className="flex flex-col gap-4 max-md:w-full max-md:justify-between pt-6">
                                    <div className="w-full flex flex-col pr-20 gap-12 max-md:pr-2">
                                        {CURRENT_ROUND === 1 ? (
                                            <CommentEdit
                                                score={score}
                                                setScore={setScore}
                                                comment={comment}
                                                setComment={setComment}
                                            />
                                        ) : (
                                            <>
                                                {CURRENT_ROUND === 2 ? (
                                                    <>
                                                        <CommentView
                                                            roundNumber={1}
                                                            score={
                                                                teamDetails
                                                                    .submission
                                                                    .round1Score
                                                            }
                                                            judge={
                                                                teamDetails
                                                                    .submission
                                                                    .round1Judge
                                                            }
                                                            comment={
                                                                teamDetails
                                                                    .submission
                                                                    .round1Comment
                                                            }
                                                        />
                                                        <CommentEdit
                                                            score={score}
                                                            setScore={setScore}
                                                            comment={comment}
                                                            setComment={
                                                                setComment
                                                            }
                                                        />
                                                    </>
                                                ) : (
                                                    <>
                                                        {CURRENT_ROUND === 3 ? (
                                                            <>
                                                                <CommentView
                                                                    roundNumber={
                                                                        1
                                                                    }
                                                                    score={
                                                                        teamDetails
                                                                            .submission
                                                                            .round1Score
                                                                    }
                                                                    judge={
                                                                        'someone'
                                                                    }
                                                                    comment={
                                                                        'iawjdhuihwaduahi'
                                                                    }
                                                                />
                                                                <CommentView
                                                                    roundNumber={
                                                                        1
                                                                    }
                                                                    score={9}
                                                                    judge={
                                                                        'someone'
                                                                    }
                                                                    comment={
                                                                        'iawjdhuihwaduahi'
                                                                    }
                                                                />
                                                                <CommentEdit
                                                                    score={
                                                                        score
                                                                    }
                                                                    setScore={
                                                                        setScore
                                                                    }
                                                                    comment={
                                                                        comment
                                                                    }
                                                                    setComment={
                                                                        setComment
                                                                    }
                                                                />
                                                            </>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </div>
                                    <div
                                        onClick={handleSubmit}
                                        className="cursor-pointer relative w-[30%] h-12 mt-4 flex items-center justify-center px-5 py-3 overflow-hidden font-bold rounded-full group"
                                    >
                                        <span className="w-96 h-96 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                        <span className="absolute top-0 left-0 w-56 h-56 -mt-1 transition-all duration-500 ease-in-out -translate-x-96 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-0"></span>

                                        <span className="font-spaceGrotesk text-lg font-bold  items-center  relative w-full text-left flex justify-center gap-x-3 text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900">
                                            <div>SAVE</div>
                                        </span>
                                        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                                    </div>
                                </div>
                            ) : (
                                <div className="my-12 font-ibmMono">
                                    No Submission found for this team.
                                </div>
                            )}
                        </div>

                        {/* STRONGLY SUGGESTED MAKE NEW DUPLICATE 2 COMPONENTS BELOW JUST FOR ADMIN PANEL SOLO PROJECT VIEW PAGE CUZ IT WILL HAVE A NEW CHECK KI EVEN SUPER USER CAN VIEW ALL */}

                        <div className="w-full lg:w-[50%] h-full">
                            {teamDetails.submission ? (
                                <ViewSubmission
                                    id={String(teamDetails.submission._id)}
                                />
                            ) : (
                                <></>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const session = await getSession(context);
    if (!session || !session.user.isAdmin) {
        return {
            redirect: {
                destination: '/hack',
            },
        };
    }
    const { id } = context.query;
    return {
        props: { id },
    };
};

export default ProjectReviewPage;
