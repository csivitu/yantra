import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Loader from '@/components/common/loader';
import Toaster from '@/utils/toaster';
import postHandler from '@/handlers/postHandler';
import { useSession } from 'next-auth/react';
import { SubmissionType } from '@/models/submissionModel';
import mongoose from 'mongoose';
import getHandler from '@/handlers/getHandler';
import { TeamType } from '@/models/teamModel';
import Link from 'next/link';
type ViewSubmissionProps = {
    id: string;
};
const ViewSubmission = ({ id }: ViewSubmissionProps) => {
    const [submission, setSubmission] = useState<SubmissionType>();
    const { data: session } = useSession();
    useEffect(() => {
        getHandler(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/submission/${id}`
        )
            .then((res) => {
                setSubmission(res.data.submission);

                setLoading(false);
            })
            .catch((err) => {
                Toaster.error('Internal Server Error');
                console.log(err);
            });
    }, [session]);

    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const getTrack = (index: number) => {
        if (index == 1) return 'GOOD HEALTH AND WELL BEING';
        else if (index == 2) return 'QUALITY EDUCATION';
        else if (index == 3) return 'INDUSTRY, INNOVATION AND INFRASTRUCTURE';
        else if (index == 4) return 'REDUCED INEQUALITIES';
        else if (index == 5) return 'SUSTAINABLE CITIES AND COMMUNITIES';
        else if (index == 6) return 'RESPONSIBLE CONSUMPTION AND PRODUCTION';
        else '';
    };

    const getLink = (str: string): string => {
        try {
            let url = new URL(str);
            return url.hostname;
        } catch {
            return str;
        }
    };

    return (
        <>
            <div className="h-full w-full flex flex-col justify-end items-center">
                {loading ? (
                    <Loader />
                ) : (
                    <div className="h-[80%] w-full font-spaceGrotesk">
                        <div className="text-sm flex justify-start gap-2 items-center pt-4">
                            <p className="font-spaceGrotesk text-white opacity-[0.4]">
                                Project Title
                            </p>
                        </div>
                        <div>{submission?.title}</div>
                        <div className="text-sm flex justify-start gap-2 items-center pt-4">
                            <p className="font-spaceGrotesk text-white opacity-[0.4]">
                                Project Description
                            </p>
                        </div>
                        <div>{submission?.description}</div>
                        <div className="text-sm flex justify-start gap-2 items-center pt-4">
                            <p className="font-spaceGrotesk text-white opacity-[0.4]">
                                Project Track
                            </p>
                        </div>
                        <div>
                            {getTrack(
                                submission?.track
                                    ? Number(submission?.track)
                                    : 0
                            )}
                        </div>
                        <div className="text-sm flex justify-start gap-2 items-center pt-4">
                            <p className="font-spaceGrotesk text-white opacity-[0.4]">
                                Project Links
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
                    </div>
                )}
            </div>
        </>
    );
};

export default ViewSubmission;
