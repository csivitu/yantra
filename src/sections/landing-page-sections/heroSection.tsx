import React, { useState, useEffect } from 'react';
import SocialMediaLinks from '@/components/uncommon/social-media-links/socialMediaLinks';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Loader from '@/components/common/loader';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'spline-viewer': any;
        }
    }
}

const HeroSection = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loaderTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Set a timeout to simulate loading time

        return () => clearTimeout(loaderTimeout);
    }, []);

    return (
        <>
            <div className="h-[70vh] flex justify-around flex-col-reverse sm:flex-row items-end sm:px-28 text-white">
                <div className="sm:w-[40%] w-[100%] sm:h-[100%] h-[60%] flex justify-center sm:items-start items-center flex-col gap-4">
                    <div className="text-6xl font-bronson w-[40%] h-[20%]">
                        <Image
                            src="/yantraLogo.png"
                            alt="Logo"
                            height={1000000}
                            width={100000}
                            className="w-[100%] h-[100%] object-cover"
                        />
                    </div>
                    <div className="text-5xl font-ibmMono font-semibold tracking-widest leading-[3.5rem]">
                        A WEEK OF
                        <br />
                        <span className="text-[#244EE4]">TECHNICAL</span>
                        <br /> INNOVATION
                    </div>

                    <div>
                        <Link
                            href={'https://vtop.vit.ac.in/'}
                            className="bg-[#FFA412] font-spaceGrotesk hover:bg-[#ffb744] text-white font-bold  py-3 px-3 rounded-lg flex justify-center gap-2 items-center"
                        >
                            <p>Register Now</p>
                            <svg
                                width="23"
                                height="23"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.667 28.3333L27 13.0003"
                                    stroke="white"
                                    strokeWidth="3.41667"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 12H28.6667V28.6667"
                                    stroke="white"
                                    strokeWidth="3.41667"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-[50%] w-[100%] lg:h-[100%] h-[50%] bg-transparent">
                    <div className="h-full w-full bg-transparent">
                        {isLoading ? (
                            <div className="h-full w-full">
                                <Loader />
                            </div> // Render the loader while the scene is loading
                        ) : (
                            <Spline
                                style={{ height: '100%', width: '100%' }}
                                scene="https://draft.spline.design/BtDxBI0l4IDDJacH/scene.splinecode"
                            />
                        )}
                    </div>
                </div>

                <SocialMediaLinks />
            </div>

            <div className="bg-[#6C6C6C] opacity-[0.12] w-full h-[15vh]"></div>
        </>
    );
};

export default HeroSection;
