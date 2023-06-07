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
type ViewSubmissionProps = {
    toggleEdit: (value: number) => void;
    id: mongoose.Schema.Types.ObjectId;
};
const ViewSubmission = ({ toggleEdit, id }: ViewSubmissionProps) => {
    console.log(id);
    const [submission, setSubmission] = useState<SubmissionType>();
    const [teamData, setTeamData] = useState([]);
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
    const [teamDetails, setTeamDetails] = useState<TeamType>({
        id: new mongoose.Schema.Types.ObjectId(''),
        title: '',
        members: [],
        submission: new mongoose.Schema.Types.ObjectId(''),
    });
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
    useEffect(() => {
        getHandler(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/team/${id}`)
            .then((res) => {
                setTeamDetails(res.data.team);

                setLoading(false);
            })
            .catch((err) => {
                Toaster.error('Internal Server Error');
                console.log(err);
            });
    }, []);
    return (
        <>
            <div className="h-full w-full flex flex-col justify-end items-center">
                {loading ? (
                    <Loader />
                ) : (
                    <div className="h-[80%] w-full font-spaceGrotesk">
                        <form onSubmit={handleSubmit}>
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

                            <div>
                                {links.map((el) => {
                                    return <p key={Math.random()}>{el}</p>;
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
