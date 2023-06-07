import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '@/components/common/loader';
import Toaster from '@/utils/toaster';
import { useSession } from 'next-auth/react';
import { SubmissionType } from '@/models/submissionModel';
import Link from 'next/link';
import { LOCK_SUBMISSIONS } from '@/constants';
import getHandler from '@/handlers/getHandler';

type ViewSubmissionProps = {
    toggleEdit: (value: number) => void;
};
const ViewSubmission = ({ toggleEdit }: ViewSubmissionProps) => {
    const [submission, setSubmission] = useState<SubmissionType>();
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const { data: session } = useSession();
    useEffect(() => {
        if (session?.user) {
            if (!session.user.team) {
                Toaster.error(
                    'You are not a part of any team, contact the admin.'
                );
                router.push('/hack');
            } else {
                setSubmission(
                    session.user.team.submission as unknown as SubmissionType
                );
                const sub = session.user.team
                    .submission as unknown as SubmissionType;

                if (!sub.title)
                    getHandler(
                        `${process.env.NEXT_PUBLIC_BASE_URL}/api/submission`
                    )
                        .then((res) => {
                            setSubmission(res.data.submission);
                        })
                        .catch((err) => {
                            console.log(err);
                        });

                setLoading(false);
            }
        }
    }, [session]);

    const handleSubmit = async () => {
        toggleEdit(1);
    };

    const getLink = (str: string): string => {
        try {
            let url = new URL(str);
            return url.hostname;
        } catch {
            return str;
        }
    };

    const getTrack = (index: number) => {
        if (index == 1) return 'GOOD HEALTH AND WELL BEING';
        else if (index == 2) return 'QUALITY EDUCATION';
        else if (index == 3) return 'INDUSTRY, INNOVATION AND INFRASTRUCTURE';
        else if (index == 4) return 'REDUCED INEQUALITIES';
        else if (index == 5) return 'SUSTAINABLE CITIES AND COMMUNITIES';
        else if (index == 6) return 'RESPONSIBLE CONSUMPTION AND PRODUCTION';
        else '';
    };

    return (
        <>
            <div className="h-full w-full flex justify-around items-center">
                {loading ? (
                    <Loader />
                ) : (
                    <div className="h-full w-full font-spaceGrotesk flex flex-col justify-center">
                        <div className="font-bronson text-2xl">
                            Submission Details
                        </div>
                        <div className="text-sm flex justify-start gap-2 items-center pt-4">
                            <p className="font-spaceGrotesk text-white opacity-[0.4]">
                                Name
                            </p>
                        </div>
                        <div>{submission?.title}</div>
                        <div className="text-sm flex justify-start gap-2 items-center pt-4">
                            <p className="font-spaceGrotesk text-white opacity-[0.4]">
                                Description
                            </p>
                        </div>
                        <div>{submission?.description}</div>
                        <div className="text-sm flex justify-start gap-2 items-center pt-4">
                            <p className="font-spaceGrotesk text-white opacity-[0.4]">
                                Track
                            </p>
                        </div>
                        <div>
                            {' '}
                            {getTrack(
                                submission?.track
                                    ? Number(submission?.track)
                                    : 0
                            )}
                        </div>
                        <div className="text-sm flex justify-start gap-2 items-center pt-4">
                            <p className="font-spaceGrotesk text-white opacity-[0.4]">
                                Links
                            </p>
                        </div>
                        <div className="w-full flex flex-col">
                            {submission?.links &&
                            submission.links.length > 0 ? (
                                <>
                                    {submission?.links &&
                                        submission?.links.map((el) => {
                                            return (
                                                <Link
                                                    href={el}
                                                    key={Math.random()}
                                                    className="hover:underline underline-offset-4"
                                                >
                                                    {
                                                        getLink(el)

                                                        //add a svg here
                                                    }
                                                </Link>
                                            );
                                        })}
                                </>
                            ) : (
                                <>-</>
                            )}
                        </div>

                        <div className="text-sm flex justify-start gap-2 items-center pt-4">
                            <p className="font-spaceGrotesk text-white opacity-[0.4]">
                                Files
                            </p>
                        </div>
                        <div className="w-full flex flex-col">
                            {submission?.files &&
                            submission.files.length > 0 ? (
                                <>
                                    {submission?.files &&
                                        submission?.files.map((el) => {
                                            return (
                                                <Link
                                                    href={`/${el.replace(
                                                        '/home/adminuser/yantra/public',
                                                        ''
                                                    )}`}
                                                    target="_blank"
                                                    key={Math.random()}
                                                    className="hover:underline underline-offset-4"
                                                >
                                                    {el.split('/').slice(-1)}
                                                </Link>
                                            );
                                        })}
                                </>
                            ) : (
                                <>-</>
                            )}
                        </div>

                        {!LOCK_SUBMISSIONS && (
                            <div className="flex h-max py-0 gap-x-10 justify-start items-center flex-row gap-2">
                                <div
                                    onClick={handleSubmit}
                                    className="cursor-pointer relative w-[30%] h-12 mt-4 flex items-center justify-center px-5 py-3 overflow-hidden font-bold rounded-full group"
                                >
                                    <span className="w-96 h-96 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                    <span className="absolute top-0 left-0 w-56 h-56 -mt-1 transition-all duration-500 ease-in-out -translate-x-96 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                    <span className="font-spaceGrotesk text-lg font-bold flex justify-center items-center  relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900">
                                        Edit
                                    </span>
                                    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default ViewSubmission;
