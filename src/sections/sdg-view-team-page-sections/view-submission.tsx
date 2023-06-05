import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Loader from '@/components/common/loader';
import Link from 'next/link';
import InputField from '@/components/common/InputField';
import TagsField from '@/components/common/TagsField';
import Toaster from '@/utils/toaster';
import Dropdown from '@/components/common/Dropdown';
import postHandler from '@/handlers/postHandler';
import { useSession } from 'next-auth/react';
import { SubmissionType } from '@/models/submissionModel';
import mongoose from 'mongoose';
type ViewSubmissionProps = {
    toggleEdit: (value: number) => void;
};
const ViewSubmission = ({ toggleEdit }: ViewSubmissionProps) => {
    const [submission, setSubmission] = useState<SubmissionType>();
    const { data: session } = useSession();
    useEffect(() => {
        if (session?.user) {
            if (!session.user.team) {
                Toaster.error(
                    'You are not a part of any team, contact the admin.'
                );
                router.push('/sdg');
            } else {
                setSubmission(
                    session.user.team.submission as unknown as SubmissionType
                );
                const sub = session.user.team
                    .submission as unknown as SubmissionType;
                setProjectName(sub.title);
                setProjectDescription(sub.description);
                setLinks(sub.links);
                setTrack(sub.track);

                setLoading(false);
                console.log(submission);
            }
        }
    }, [session]);

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    const [projectName, setProjectName] = useState('');
    const [track, setTrack] = useState<number>(0);
    const [projectDescription, setProjectDescription] = useState('');

    const [links, setLinks] = useState<string[]>([]);
    const [inputFiles, setInputFiles] = useState<File[]>();
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const handleSubmit = async () => {
        // Perform submission logic here
        // For demonstration purposes, we'll just log the form data

        toggleEdit(1);
    };

    return (
        <>
            <div className="h-full w-full flex justify-around items-center">
                {loading ? (
                    <Loader />
                ) : (
                    <div className="h-full w-full font-spaceGrotesk">
                        <form onSubmit={handleSubmit}>
                            <div className="text-sm flex justify-start gap-2 items-center pt-4">
                                <p className="font-spaceGrotesk text-white opacity-[0.4]">
                                    Project Name
                                </p>
                            </div>
                            <div>{projectName}</div>
                            <div className="text-sm flex justify-start gap-2 items-center pt-4">
                                <p className="font-spaceGrotesk text-white opacity-[0.4]">
                                    Project Description
                                </p>
                            </div>
                            <div>{projectDescription}</div>
                            <div className="text-sm flex justify-start gap-2 items-center pt-4">
                                <p className="font-spaceGrotesk text-white opacity-[0.4]">
                                    Project Track
                                </p>
                            </div>
                            <div>{track}</div>
                            <div className="text-sm flex justify-start gap-2 items-center pt-4">
                                <p className="font-spaceGrotesk text-white opacity-[0.4]">
                                    Project Links
                                </p>
                            </div>

                            <div>
                                {links.map((el) => {
                                    return <p key={el}>{el}</p>;
                                })}
                            </div>

                            <div className="flex h-max py-0 gap-x-10 justify-start items-center flex-row gap-2">
                                <div
                                    onClick={handleSubmit}
                                    className="cursor-pointer relative w-[30%] h-12 mt-4 flex items-center justify-center px-5 py-3 overflow-hidden font-bold rounded-full group"
                                >
                                    <span className="w-96 h-96 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                    <span className="absolute top-0 left-0 w-56 h-56 -mt-1 transition-all duration-500 ease-in-out -translate-x-96 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                    <span className="font-spaceGrotesk text-lg font-bold flex justify-center items-center  relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900">
                                        EDIT
                                    </span>
                                    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
};

export default ViewSubmission;
