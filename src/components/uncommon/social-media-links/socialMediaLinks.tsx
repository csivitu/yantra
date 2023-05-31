/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';
import Image from 'next/image';
import SlideInLinkText from '../../common/slideInLinkText';

const SocialMediaLinks = () => {
    const [toggle, setToggle] = useState(-1);
    const handles = ['youtube', 'twitter', 'instagram', 'linkedIn'];

    return (
        <div className="h-[75%] flex flex-col justify-around items-end m-auto max-md:flex-row max-md:w-full max-md:items-center max-md:justify-center">
            {handles.map((handle: string, index: number) => {
                return (
                    <div
                        key={index}
                        className="flex justify-center items-center ml-16"
                    >
                        <SlideInLinkText
                            isVisible={toggle}
                            children={
                                <div className="text-lg uppercase font-spaceGrotesk text-white font-semibold max-md:hidden">
                                    {handle}
                                </div>
                            }
                            xIndex={index === 0 ? -10 : 0}
                            elIndex={index}
                        />
                        <Image
                            width={10000}
                            height={10000}
                            src={`/${handle}.png`}
                            alt="/"
                            className="w-12 h-8 object-contain z-50 cursor-pointer"
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
