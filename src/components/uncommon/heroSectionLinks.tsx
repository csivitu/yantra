/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';
import Image from 'next/image';
import SlideInLinkText from '../common/slideInLinkText';

const HeroSectionLinks = () => {
    const [toggleYoutube, setToggleYoutube] = useState(false);
    const [toggleTwitter, setToggleTwitter] = useState(false);
    const [toggleInstagram, setToggleInstagram] = useState(false);
    const [toggleLinkedIn, setToggleLinkedIn] = useState(false);

    return (
        <div className="w-2/5 flex justify-around items-center m-auto">
            <div
                className="flex justify-center items-center ml-16"
                onMouseEnter={() => setToggleYoutube(true)}
                onMouseLeave={() => setToggleYoutube(false)}
            >
                <Image
                    width={10000}
                    height={10000}
                    src="/youtube.png"
                    alt="/"
                    className="w-12 h-8 object-contain z-50 cursor-pointer"
                />

                <SlideInLinkText
                    isVisible={toggleYoutube}
                    children={
                        <div className="text-lg uppercase font-spaceGrotesk text-white font-semibold">
                            Youtube
                        </div>
                    }
                    xIndex={5}
                />
            </div>
            <div
                className="flex justify-center items-center"
                onMouseEnter={() => setToggleTwitter(true)}
                onMouseLeave={() => setToggleTwitter(false)}
            >
                <Image
                    width={10000}
                    height={10000}
                    src="/twitter.png"
                    alt="/"
                    className="w-12 h-8 object-contain cursor-pointer"
                />
                <SlideInLinkText
                    isVisible={toggleTwitter}
                    children={
                        <div className="text-lg uppercase font-spaceGrotesk text-white font-semibold">
                            Twitter
                        </div>
                    }
                    xIndex={-5}
                />
            </div>
            <div
                className="flex justify-center items-center"
                onMouseEnter={() => setToggleInstagram(true)}
                onMouseLeave={() => setToggleInstagram(false)}
            >
                <Image
                    width={10000}
                    height={10000}
                    src="/instagram.png"
                    alt="/"
                    className="w-12 h-8 object-contain cursor-pointer"
                />
                <SlideInLinkText
                    isVisible={toggleInstagram}
                    children={
                        <div className="text-lg uppercase font-spaceGrotesk text-white font-semibold">
                            Instagram
                        </div>
                    }
                    xIndex={-5}
                />
            </div>
            <div
                className="flex justify-center items-center"
                onMouseEnter={() => setToggleLinkedIn(true)}
                onMouseLeave={() => setToggleLinkedIn(false)}
            >
                <Image
                    width={10000}
                    height={10000}
                    src="/linkedin.png"
                    alt="/"
                    className="w-12 h-8 object-contain cursor-pointer"
                />
                <SlideInLinkText
                    isVisible={toggleLinkedIn}
                    children={
                        <div className="text-lg uppercase font-spaceGrotesk text-white font-semibold">
                            LinkedIn
                        </div>
                    }
                    xIndex={-5}
                />
            </div>
        </div>
    );
};

export default HeroSectionLinks;
