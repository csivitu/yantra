import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Loader from '@/components/common/loader';
import Link from 'next/link';
import InputField from '@/components/common/InputField';
import TagsField from '@/components/common/TagsField';

const ProjectSubmission = () => {
    const [links, setLinks] = useState<string[]>([]);
    const router = useRouter();
    return (
        <>
            <div className="h-full w-full flex justify-around items-center">
                <div className="h-full w-full">
                    <InputField
                        type="text"
                        name="project-name"
                        label="project-name"
                    />
                    <InputField type="text" name="track" label="track" />
                    <InputField
                        type="text"
                        name="project-description"
                        label="project-description"
                    />
                    <InputField type="text" name="link" label="link" />
                    <TagsField tags={links} setTags={setLinks} />
                </div>
            </div>
        </>
    );
};

export default ProjectSubmission;
