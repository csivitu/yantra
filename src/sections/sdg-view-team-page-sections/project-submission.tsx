import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Loader from '@/components/common/loader';
import Link from 'next/link';
import InputField from '@/components/common/InputField';
import TagsField from '@/components/common/TagsField';
import Toaster from '@/utils/toaster';
import Dropdown from '@/components/common/Dropdown';
import postHandler from '@/handlers/postHandler';
import InputTextField from '@/components/common/InputTextField';

const ProjectSubmission = () => {
    const [projectName, setProjectName] = useState('');
    const [track, setTrack] = useState<number>(0);
    const [projectDescription, setProjectDescription] = useState('');
    const [links, setLinks] = useState<string[]>([]);

    const router = useRouter();

    const handleSubmit = async () => {
        const formData = {
            title: projectName,
            description: projectDescription,
            track: track,
            links: links,
        };

        if (track < 1 || track > 6) Toaster.error('Select a valid Track.');
        else {
            const toaster = Toaster.startLoad();
            const res = await postHandler(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/submission`,
                formData
            );

            if (res.status === 1) {
                Toaster.stopLoad(toaster, 'Submitted', 1);
                router.reload();
            } else {
                console.log(res);
                Toaster.stopLoad(toaster, res.data, 0);
            }
        }
    };

    const handleDropDownChange = (item: string) => {
        if (item === 'GOOD HEALTH AND WELL BEING') {
            setTrack(1);
        } else if (item === 'QUALITY EDUCATION') {
            setTrack(2);
        } else if (item === 'INDUSTRY, INNOVATION AND INFRASTRUCTURE') {
            setTrack(3);
        } else if (item === 'REDUCED INEQUALITIES') {
            setTrack(4);
        } else if (item === 'SUSTAINABLE CITIES AND COMMUNITIES') {
            setTrack(5);
        } else if (item === 'RESPONSIBLE CONSUMPTION AND PRODUCTION') {
            setTrack(6);
        }
    };

    return (
        <>
            <div className="h-full w-full flex flex-col justify-around items-center gap-8">
                <div className="font-bronson text-2xl">
                    Submit your Project!
                </div>
                <div className="h-full w-full">
                    <InputField
                        type="text"
                        label="Title"
                        value={projectName}
                        onChange={setProjectName}
                        canEdit={true}
                    />
                    <Dropdown
                        label="Track"
                        items={[
                            'GOOD HEALTH AND WELL BEING',
                            'QUALITY EDUCATION',
                            'INDUSTRY, INNOVATION AND INFRASTRUCTURE',
                            'REDUCED INEQUALITIES',
                            'SUSTAINABLE CITIES AND COMMUNITIES',
                            'RESPONSIBLE CONSUMPTION AND PRODUCTION',
                        ]}
                        onChange={handleDropDownChange}
                    />
                    <InputTextField
                        label="Project Description"
                        value={projectDescription}
                        onChange={setProjectDescription}
                    />

                    <TagsField label="Links" tags={links} setTags={setLinks} />
                    <div className=" flex h-max py-0 gap-x-10 justify-start items-center flex-row gap-2">
                        <div
                            onClick={handleSubmit}
                            className="cursor-pointer relative w-[30%] h-12 mt-4 flex items-center justify-center px-5 py-3 overflow-hidden font-bold rounded-full group"
                        >
                            <span className="w-96 h-96 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                            <span className="absolute top-0 left-0 w-56 h-56 -mt-1 transition-all duration-500 ease-in-out -translate-x-96 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                            <span className="font-spaceGrotesk text-lg font-bold flex justify-center items-center  relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900">
                                Submit
                            </span>
                            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectSubmission;
