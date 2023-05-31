/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';
import Image from 'next/image';
import SlideInLinkText from '../../common/slideInLinkText';

const SocialMediaLinks = () => {
    const [toggle, setToggle] = useState(-1);
    const handles = ['youtube', 'twitter', 'instagram', 'linkedIn'];

    return (
        <div className="w-1/2 flex justify-around items-center m-auto">
            {handles.map((handle: string, index: number) => {
                return (
                    <div
                        key={index}
                        className="flex justify-center items-center ml-16"
                        onMouseEnter={() => setToggle(index)}
                        onMouseLeave={() => setToggle(-1)}
                    >
                        <Image
                            width={10000}
                            height={10000}
                            src={`/${handle}.png`}
                            alt="/"
                            className="w-12 h-8 object-contain z-50 cursor-pointer"
                        />

                        <SlideInLinkText
                            isVisible={toggle}
                            children={
                                <div className="text-lg uppercase font-spaceGrotesk text-white font-semibold">
                                    {handle}
                                </div>
                            }
                            xIndex={index === 0 ? 10 : 0}
                            elIndex={index}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default SocialMediaLinks;
