import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Loader from '@/components/common/loader';
import Link from 'next/link';
import InputField from '@/components/common/InputField';
import TagsField from '@/components/common/TagsField';

const ProjectSubmission = () => {
    const [projectName, setProjectName] = useState('');
    const [track, setTrack] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [link, setLink] = useState('');
    const [links, setLinks] = useState<string[]>([]);
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
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProjectSubmission;
