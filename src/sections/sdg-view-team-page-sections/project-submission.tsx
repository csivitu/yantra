import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Loader from '@/components/common/loader';
import Link from 'next/link';
import InputField from '@/components/common/InputField';
import TagsField from '@/components/common/TagsField';
import Toaster from '@/utils/toaster';

const ProjectSubmission = () => {
    const [projectName, setProjectName] = useState('');
    const [track, setTrack] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [link, setLink] = useState('');
    const [links, setLinks] = useState<string[]>([]);
    const [inputFiles, setInputFiles] = useState<File[]>();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform submission logic here
        // For demonstration purposes, we'll just log the form data
        console.log({
            projectName,
            track,
            projectDescription,
            links,
        });
        // Reset form fields
        setProjectName('');
        setTrack('');
        setProjectDescription('');
        setLink('');
        setLinks([]);
    };

    return (
        <>
            <div className="h-full w-full flex justify-around items-center">
                <div className="h-full w-full">
                    <form onSubmit={handleSubmit}>
                        <InputField
                            type="text"
                            name="project-name"
                            label="Project Name"
                            value={projectName}
                            onChange={(event) =>
                                setProjectName(event.target.value)
                            }
                        />
                        <InputField
                            type="text"
                            name="track"
                            label="Track"
                            value={track}
                            onChange={(event) => setTrack(event.target.value)}
                        />
                        <InputField
                            type="text"
                            name="project-description"
                            label="Project Description"
                            value={projectDescription}
                            onChange={(event) =>
                                setProjectDescription(event.target.value)
                            }
                        />
                        <InputField
                            type="text"
                            name="link"
                            label="Link"
                            value={link}
                            onChange={(event) => setLink(event.target.value)}
                        />
                        <TagsField tags={links} setTags={setLinks} />
                        <div className="flex flex-col gap-2">
                            <input
                                type="file"
                                id="resume"
                                className="hidden"
                                multiple={false}
                                onChange={({ target }) => {
                                    if (target.files && target.files[0]) {
                                        const file = target.files[0];
                                        if (file.type.split('/')[1] == 'pdf') {
                                            if (inputFiles) {
                                                const newFiles = [
                                                    ...inputFiles,
                                                    file,
                                                ];
                                                setInputFiles(newFiles);
                                            } else {
                                                const newFiles = [file];
                                                setInputFiles(newFiles);
                                            }
                                        } else
                                            Toaster.error(
                                                'Only PDF Files can be selected'
                                            );
                                    }
                                }}
                            />

                            <label htmlFor="resume">
                                <div
                                    className={`rounded-3xl relative py-2 px-2 w-32 flex flex-col items-center justify-center gap-1 font-Helvetica cursor-pointer border-[1px] border-black transition-all duration-300 ease-in-out hover:scale-105`}
                                >
                                    {inputFiles?.name == '' ? (
                                        <>
                                            <Image
                                                width={10000}
                                                height={10000}
                                                alt={'+'}
                                                src={'/add.png'}
                                                className={'w-5 h-5'}
                                            />
                                            <div className="">add File</div>
                                            <div className="absolute top-0 right-0 translate-y-[-50%] text-xs bg-[#3a3a3a] rounded-lg text-white py-1 px-2">
                                                optional
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <Image
                                                width={10000}
                                                height={10000}
                                                alt={'+'}
                                                src={'/checkmark.png'}
                                                className={'w-8 h-8'}
                                            />
                                            <div className="w-full text-center text-sm text-ellipsis overflow-hidden">
                                                {inputFiles?.name}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProjectSubmission;
