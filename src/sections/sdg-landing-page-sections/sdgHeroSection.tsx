import React, { useState, useEffect, useRef } from 'react';
import SocialMediaLinks from '@/components/uncommon/social-media-links/socialMediaLinks';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Loader from '@/components/common/loader';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'spline-viewer': any;
        }
    }
}

const SDGHeroSection = () => {
    const [isLoading, setIsLoading] = useState(true);

    const { data: session } = useSession();

    const router = useRouter();

    const handleClick = () => {
        if (!session) signIn('google');
        else router.push('/hack/team');
    };

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
                    <div className="text-4xl lg:text-5xl font-sans flex justify-center max-lg:items-center flex-col font-bold tracking-normal text-center lg:text-start">
                        <div className="text-[#244EE4] w-[80%] text-7xl max-md:text-6xl font-bold">
                            <Image
                                src="/hack23.gif"
                                alt="logo"
                                height={10000}
                                width={10000}
                                className="w-full h-auto object-cover cursor-pointer"
                            />
                        </div>
                        <p className="font-bronson max-lg:mt-2 mt-4 text-xl">
                            A SUSTAINABLE DEVELOPMENT HACKATHON
                        </p>
                    </div>

                    <div
                        onClick={handleClick}
                        className="cursor-pointer relative w-42 h-12 mt-4 flex items-center justify-center px-5 py-3 overflow-hidden font-bold rounded-full group"
                    >
                        <span className="w-96 h-96 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-56 h-56 -mt-1 transition-all duration-500 ease-in-out -translate-x-96 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                        <span className="font-spaceGrotesk text-lg font-bold flex justify-center items-center  relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900">
                            {session ? 'VIEW TEAM' : 'REGISTER NOW'}
                        </span>
                        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                    </div>
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
                            scene="https://draft.spline.design/y6CkX-J9CjG69qmL/scene.splinecode"
                            onLoad={() => setIsLoading(false)}
                        />
                    </div>
                </div>
                <SocialMediaLinks />
            </div>

            <div className="bg-[#6C6C6C] bg-opacity-[0.05] flex justify-center gap-10 lg:gap-32 items-center w-full h-[12vh] max-lg:mt-8">
                <Image
                    src={`/SDGLogo.png`}
                    alt="g2"
                    className="h-5 sm:h-12  w-auto object-contain  "
                    width={10000}
                    height={10000}
                />
                <Image
                    src={`/g2.png`}
                    alt="g2"
                    className="h-5 sm:h-12  w-auto object-contain  "
                    width={10000}
                    height={10000}
                />
                <Image
                    src={`/iic.png`}
                    alt="g2"
                    className="h-5 sm:h-12 w-auto object-contain "
                    width={10000}
                    height={10000}
                />
            </div>
        </>
    );
};

export default SDGHeroSection;
