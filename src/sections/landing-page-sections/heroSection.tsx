import React, { useState, useEffect, useRef } from 'react';
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
        }, 6000); // Set a timeout to simulate loading time

        return () => clearTimeout(loaderTimeout);
    }, []);

    return (
        <>
            <div className="h-[70vh] w-[95%] m-auto max-md:h-[100vh] flex justify-around flex-col-reverse lg:flex-row items-end lg:px-24 text-white">
                <div className="lg:w-[40%] w-[100%] lg:h-[100%] h-[60%] flex justify-center lg:items-start items-center flex-col gap-3">
                    <div className="text-6xl flex justify-around items-center font-bronson w-[50%] h-[35%] lg:h-[20%]">
                        <Image
                            src="/logoYantra.png"
                            alt="Logo"
                            height={1000000}
                            width={100000}
                            className="w-[100%] h-[100%] object-contain"
                        />
                    </div>
                    <div className="text-4xl lg:text-5xl font-bronson font-bold tracking-normal sm:tracking-[1.5rem] lg:tracking-[0.4em] leading-[3rem] text-center lg:text-start">
                        {/* A WEEK OF
                        <br />
                        <span className="text-[#244EE4] w-full text-center">
                            TECHNICAL
                        </span>
                        <br /> INNOVATION */}
                        <p>A WEEK OF</p>
                        <p className="text-[#244EE4] w-full ">TECHNICAL</p>
                        <p>INNOVATION</p>
                    </div>

                    <Link
                        href="https://vtop.vit.ac.in/"
                        className="rounded-md px-10 py-3 mt-3 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#9207FF] text-[#9207FF] "
                    >
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#9207FF] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-[#9207FF] transition duration-300 group-hover:text-white ease font-spaceGrotesk text-xl tracking-wider">
                            REGISTER NOW
                        </span>
                    </Link>
                </div>
                <div className="lg:w-[50%] w-[100%] lg:h-[100%] h-[50%] bg-transparent">
                    <div className="h-full w-full bg-transparent">
                        <div
                            className={`h-full w-full flex justify-center items-center ${
                                !isLoading ? 'hidden' : ''
                            }`}
                        >
                            <Loader />
                        </div>
                        <Spline
                            className={`max-md:my-12 ${
                                isLoading ? 'hidden' : ''
                            }`}
                            style={{ height: '100%', width: '100%' }}
                            scene="https://draft.spline.design/BtDxBI0l4IDDJacH/scene.splinecode"
                        />
                    </div>
                </div>

                <SocialMediaLinks />
            </div>

            <div className="bg-[#6C6C6C] bg-opacity-[0.12] flex justify-center gap-32 items-center w-full h-[12vh] max-lg:mt-8">
                <Image
                    src={`/g2.png`}
                    alt="g2"
                    className="h-12  w-auto object-contain  "
                    width={10000}
                    height={10000}
                />
                <Image
                    src={`/iic.png`}
                    alt="g2"
                    className="h-12 w-auto object-contain "
                    width={10000}
                    height={10000}
                />
            </div>
        </>
    );
};

export default HeroSection;
