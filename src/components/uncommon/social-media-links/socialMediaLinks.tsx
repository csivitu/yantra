/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';
import Image from 'next/image';
import SlideInLinkText from '../../common/slideInLinkText';
import Link from 'next/link';

const SocialMediaLinks = () => {
    const [toggle, setToggle] = useState(-1);
    const handles = [
        {
            name: 'youtube',
            link: 'https://www.youtube.com/@VITUniversityVellore',
        },
        { name: 'twitter', link: 'https://twitter.com/VIT_univ' },
        { name: 'instagram', link: 'https://www.instagram.com/vellore_vit' },
        {
            name: 'linkedIn',
            link: 'https://www.linkedin.com/school/vellore-institute-of-technology',
        },
    ];

    return (
        <div className="h-[75%] lg:flex hidden flex-col justify-around items-end m-auto max-md:flex-row max-md:w-full max-md:items-center max-md:justify-center">
            {handles.map((handle, index) => {
                const { name, link } = handle;
                return (
                    <Link
                        href={link}
                        target="_blank"
                        key={index}
                        className="flex justify-end items-center w-full"
                    >
                        <SlideInLinkText
                            isVisible={toggle}
                            children={
                                <div className="text-lg uppercase mr-2 font-spaceGrotesk text-white font-semibold max-md:hidden">
                                    {name}
                                </div>
                            }
                            xIndex={index === 0 ? -5 : 0}
                            elIndex={index}
                        />
                        <Image
                            width={10000}
                            height={10000}
                            src={`/${name}.png`}
                            alt="/"
                            className="w-8 h-8 object-contain z-50 cursor-pointer"
                            onMouseEnter={() => setToggle(index)}
                            onMouseLeave={() => setToggle(-1)}
                        />
                    </Link>
                );
            })}
        </div>
    );
};

export default SocialMediaLinks;
