import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Loader from '@/components/common/loader';
import Link from 'next/link';
import InputField from '@/components/common/InputField';
import TagsField from '@/components/common/TagsField';
import Toaster from '@/utils/toaster';
import SelectField from '@/components/common/SelectField';

const ProjectSubmission = () => {
    const [projectName, setProjectName] = useState('');
    const [track, setTrack] = useState<number>(0);
    const [projectDescription, setProjectDescription] = useState('');

    const [links, setLinks] = useState<string[]>([]);
    const [inputFiles, setInputFiles] = useState<File[]>();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Perform submission logic here
        // For demonstration purposes, we'll just log the form data
        event.preventDefault();
        console.log({
            projectName,
            track,
            projectDescription,
            links,
        });
        // Reset form fields
        setProjectName('');
        setTrack(0);
        setProjectDescription('');

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
                        <SelectField
                            label="tracks"
                            options={['Option 1', 'Option 2', 'Option 3']}
                            name="tracks"
                            value={track}
                            onChange={(event) => {
                                switch (event.target.value) {
                                    case 'Option 1':
                                        setTrack(1);
                                        break;
                                    case 'Option 2':
                                        setTrack(2);
                                        break;
                                    case 'Option 3':
                                        setTrack(3);
                                        break;
                                    default:
                                        setTrack(0);
                                        break;
                                }
                            }}
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

                        <TagsField
                            label="links"
                            tags={links}
                            setTags={setLinks}
                        />
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
                                            const names: string[] = [];
                                            inputFiles?.forEach((file) =>
                                                names.push(file.name)
                                            );
                                            if (!names.includes(file.name)) {
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
                                            }
                                        } else
                                            Toaster.error(
                                                'Only PDF Files can be selected'
                                            );
                                    }
                                }}
                            />

                            <div
                                className={`rounded-3xl relative py-2 px-2 w-32 flex flex-col items-center justify-center gap-1 font-Helvetica cursor-pointer border-[1px] border-black transition-all duration-300 ease-in-out`}
                            >
                                <label htmlFor="resume">
                                    <Image
                                        width={10000}
                                        height={10000}
                                        alt={'+'}
                                        src={'/add.png'}
                                        className={'w-5 h-5'}
                                    />
                                    <div className="text-white">add File</div>
                                </label>
                                <>
                                    {inputFiles?.map((file) => {
                                        return (
                                            <div
                                                key={file.name}
                                                className="w-full text-center text-sm text-ellipsis overflow-hidden"
                                            >
                                                {file?.name}
                                            </div>
                                        );
                                    })}
                                </>
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProjectSubmission;
