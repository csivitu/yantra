import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Loader from '@/components/common/loader';
import Link from 'next/link';
import InputField from '@/components/common/InputField';
import TagsField from '@/components/common/TagsField';
import Dropdown from '@/components/common/Dropdown';

const ProjectSubmission = () => {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    const [projectName, setProjectName] = useState('');
    const [track, setTrack] = useState<number>(0);
    const [projectDescription, setProjectDescription] = useState('');

    const [links, setLinks] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
                        <Dropdown label={'track'} options={options} />

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
                        {/* iske neeche */}
                        {/* tereko jo karna hai iske beech kar */}
                        {/* iske upar */}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProjectSubmission;
