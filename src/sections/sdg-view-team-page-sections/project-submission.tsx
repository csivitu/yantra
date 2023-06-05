import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Loader from '@/components/common/loader';
import Link from 'next/link';
import InputField from '@/components/common/InputField';
import TagsField from '@/components/common/TagsField';
import Toaster from '@/utils/toaster';
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
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleDropDownChange = (item: string) => {
        if (item === 'item1') {
            setTrack(1);
        } else if (item === 'item2') {
            setTrack(2);
        } else if (item === 'item3') {
            setTrack(3);
        } else if (item === 'item4') {
            setTrack(4);
        } else if (item === 'item5') {
            setTrack(5);
        } else if (item === 'item6') {
            setTrack(6);
        } else if (item === 'item7') {
            setTrack(7);
        }
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
                        <Dropdown
                            label="Track"
                            items={[
                                'item1',
                                'item2',
                                'item3',
                                'item4',
                                'item5',
                                'item6',
                                'item7',
                            ]}
                            onChange={handleDropDownChange}
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
                            label="Links"
                            tags={links}
                            setTags={setLinks}
                        />
                        {/* ... Rest of the code ... */}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProjectSubmission;
