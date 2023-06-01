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
            <div className="h-[70vh] w-[95%] m-auto max-md:h-[100vh] flex justify-around flex-col-reverse sm:flex-row items-end sm:px-24 text-white">
                <div className="sm:w-[40%] w-[100%] sm:h-[100%] h-[60%] flex justify-center sm:items-start items-center flex-col gap-3">
                    <div className="text-6xl flex justify-around items-center font-bronson w-[50%] h-[20%]">
                        <Image
                            src="/yantraLogo.png"
                            alt="Logo"
                            height={1000000}
                            width={100000}
                            className="w-[100%] h-[100%] object-cover"
                        />
                    </div>
                    <div className="text-5xl font-ibmMono font-semibold tracking-widest leading-[3.5rem] max-md:text-center">
                        A WEEK OF
                        <br />
                        <span className="text-[#244EE4]">TECHNICAL</span>
                        <br /> INNOVATION
                    </div>

                    <Link
                        href="#_"
                        className="relative mt-2 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
                    >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </span>
                        <span className="absolute uppercase flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                            Register
                        </span>
                        <span className="relative invisible">
                            Register Text
                        </span>
                    </Link>
                </div>
                <div className="lg:w-[50%] w-[100%] lg:h-[100%] h-[50%] bg-transparent">
                    <div className="h-full w-full bg-transparent">
                        {isLoading ? (
                            <div className="h-full w-full">
                                <Loader />
                            </div> // Render the loader while the scene is loading
                        ) : (
                            <Spline
                                className="max-md:my-12 max-md:pr-4"
                                style={{ height: '100%', width: '100%' }}
                                scene="https://draft.spline.design/BtDxBI0l4IDDJacH/scene.splinecode"
                            />
                        )}
                    </div>
                </div>

                <SocialMediaLinks />
            </div>

            <div className="bg-[#6C6C6C] bg-opacity-[0.12] flex justify-center gap-32 items-center w-full h-[15vh] max-md:mt-8">
                <Image
                    src={`/g2.png`}
                    alt="g2"
                    className="h-10  w-auto object-contain rounded-xl"
                    width={10000}
                    height={10000}
                />
                <Image
                    src={`/iic.png`}
                    alt="g2"
                    className="h-10 w-auto object-contain rounded-xl"
                    width={10000}
                    height={10000}
                />
            </div>
        </>
    );
};

export default HeroSection;
