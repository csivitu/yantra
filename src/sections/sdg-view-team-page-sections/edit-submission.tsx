import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Loader from '@/components/common/loader';
import InputField from '@/components/common/InputField';
import TagsField from '@/components/common/TagsField';
import Toaster from '@/utils/toaster';
import { useSession } from 'next-auth/react';
import { SubmissionType } from '@/models/submissionModel';
import patchHandler from '@/handlers/patchHandler';
import postHandler from '@/handlers/postHandler';
import InputTextField from '@/components/common/InputTextField';
// import path from 'path';
// import * as fs from 'fs';

type ViewSubmissionProps = {
    toggleEdit: (value: number) => void;
};

const EditSubmission = ({ toggleEdit }: ViewSubmissionProps) => {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [links, setLinks] = useState<string[]>([]);
    const [inputFiles, setInputFiles] = useState<File[]>();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const { data: session } = useSession();
    useEffect(() => {
        if (session?.user) {
            if (!session.user.team) {
                Toaster.error(
                    'You are not a part of any team, contact the admin.'
                );
                router.push('/sdg');
            } else {
                const sub = session.user.team
                    .submission as unknown as SubmissionType;
                setProjectName(sub.title);
                setProjectDescription(sub.description);
                setLinks(sub.links);
                setLoading(false);
                const files = [];

                // sub.files.forEach((file) => {
                //     fs.readFile(
                //         path.join(process.cwd(), `/public/${file}`),
                //         (err, data) => {}
                //     );
                // });
            }
        }
    }, [session]);

    const handleSubmit = async () => {
        const toaster = Toaster.startLoad();

        const formData = {
            title: projectName,
            description: projectDescription,
            links: links,
        };

        const res = await patchHandler(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/submission`,
            formData
        );

        if (res.status === 1) {
            if (inputFiles && inputFiles.length > 0) {
                const formData = new FormData();

                inputFiles.forEach((file, index) =>
                    formData.append(`media${index}`, file)
                );
                const res = await postHandler(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/submission/files`,
                    formData,
                    'multipart/form-data'
                );
                if (res.status === 1) Toaster.stopLoad(toaster, 'Submitted', 1);
                else Toaster.stopLoad(toaster, res.data.message, 0);
            } else {
                Toaster.stopLoad(toaster, 'Submitted', 1);
            }

            router.reload();
        } else {
            Toaster.stopLoad(toaster, res.data.message, 0);
        }
    };

    return (
        <>
            <div className="h-full w-full flex justify-around items-center">
                {loading ? (
                    <Loader />
                ) : (
                    <div className="h-full w-full font-spaceGrotesk flex flex-col gap-2 justify-center">
                        <div className="w-full font-bronson text-2xl flex justify-between pr-4">
                            <div>Edit Submission Details</div>
                            <div
                                className="cursor-pointer"
                                onClick={() => toggleEdit(0)}
                            >
                                X
                            </div>
                        </div>
                        <InputField
                            type="text"
                            label="Project Title"
                            value={projectName}
                            onChange={setProjectName}
                        />

                        <InputTextField
                            label="Project Description"
                            value={projectDescription}
                            onChange={setProjectDescription}
                        />

                        <TagsField
                            label="Links"
                            tags={links}
                            setTags={setLinks}
                        />
                        <div className="flex h-max py-0 gap-x-10 justify-start items-center flex-row gap-2">
                            <input
                                type="file"
                                id="resume"
                                className="hidden cursor-pointer"
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

                            <div className=" w-[40%] h-full">
                                <div
                                    className={`w-full relative cursor-pointer h-12 mt-4 flex items-center justify-center px-5 py-3 overflow-hidden font-bold rounded-full group`}
                                >
                                    <span className="w-96 h-96 rotate-45 cursor-pointer -translate-x-10 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                    <span className="absolute top-0 cursor-pointer left-0 w-56 h-56 -mt-1 transition-all duration-500 ease-in-out -translate-x-96 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-0"></span>

                                    <span className="absolute inset-0 cursor-pointer border-2 border-white rounded-full"></span>
                                    <label
                                        htmlFor="resume"
                                        className="cursor-pointer flex justify-start items-center gap-x-2"
                                    >
                                        <Image
                                            width={10000}
                                            height={10000}
                                            alt={'+'}
                                            src={'/add.svg'}
                                            className={'w-5 h-5 cursor-pointer'}
                                        />
                                        <span className="font-spaceGrotesk cursor-pointer text-lg font-bold flex justify-center items-center  relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900">
                                            ADD FILE
                                        </span>
                                    </label>
                                </div>
                                <div className="absolute flex flex-col text-center">
                                    {inputFiles?.map((file) => {
                                        return (
                                            <div
                                                key={file.name}
                                                className="w-full cursor-pointer text-center text-sm text-ellipsis overflow-hidden"
                                            >
                                                {file?.name}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div
                                onClick={handleSubmit}
                                className="cursor-pointer relative w-[40%] h-12 mt-4 flex items-center justify-center px-5 py-3 overflow-hidden font-bold rounded-full group"
                            >
                                <span className="w-96 h-96 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-56 h-56 -mt-1 transition-all duration-500 ease-in-out -translate-x-96 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-0"></span>

                                <span className="font-spaceGrotesk text-lg font-bold  items-center  relative w-full text-left flex justify-center gap-x-3 text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900">
                                    <Image
                                        src="/edit-button.svg"
                                        alt="Logo"
                                        height={1000000}
                                        width={100000}
                                        className="w-4 h-4 object-contain cursor-pointer"
                                    />
                                    <div>SUBMIT</div>
                                </span>
                                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default EditSubmission;
