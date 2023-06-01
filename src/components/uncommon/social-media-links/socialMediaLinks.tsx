/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';
import Image from 'next/image';
import SlideInLinkText from '../../common/slideInLinkText';

const SocialMediaLinks = () => {
    const [toggle, setToggle] = useState(-1);
    const handles = ['youtube', 'twitter', 'instagram', 'linkedIn'];

    return (
        <div className="h-[75%] lg:flex hidden  flex-col justify-around items-end m-auto max-md:flex-row max-md:w-full max-md:items-center max-md:justify-center">
            {handles.map((handle: string, index: number) => {
                return (
                    <div
                        key={index}
                        className="flex justify-end items-center w-full"
                    >
                        <SlideInLinkText
                            isVisible={toggle}
                            children={
                                <div className="text-lg uppercase mr-2 font-spaceGrotesk text-white font-semibold max-md:hidden ">
                                    {handle}
                                </div>
                            }
                            xIndex={index === 0 ? -10 : 0}
                            elIndex={index}
                        />
                        <Image
                            width={10000}
                            height={10000}
                            src={`/${handle}.svg`}
                            alt="/"
                            className="w-8 h-8 object-contain z-50 cursor-pointer"
                            onMouseEnter={() => setToggle(index)}
                            onMouseLeave={() => setToggle(-1)}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default SocialMediaLinks;
