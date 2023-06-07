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
    id: mongoose.Schema.Types.ObjectId;
};
const ViewSubmission = ({ id }: ViewSubmissionProps) => {
    const [submission, setSubmission] = useState<SubmissionType>();
    const { data: session } = useSession();
    useEffect(() => {
        getHandler(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/submission/${id}`
        )
            .then((res) => {
                console.log(res.data.submission);
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
                        <div>{submission?.track}</div>
                        <div className="text-sm flex justify-start gap-2 items-center pt-4">
                            <p className="font-spaceGrotesk text-white opacity-[0.4]">
                                Project Links
                            </p>
                        </div>

                        {submission?.links && submission?.links.length > 0 ? (
                            <>
                                <div>
                                    {submission?.links.map((el) => {
                                        return <p key={Math.random()}>{el}</p>;
                                    })}
                                </div>
                            </>
                        ) : (
                            <>-</>
                        )}

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
                                                    href={`/${el}`}
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
