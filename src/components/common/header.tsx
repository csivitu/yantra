import React, { useEffect, useState } from 'react';
import Button from './button';
import { GetServerSidePropsContext } from 'next';
import ReactGA from 'react-ga';
import Image from 'next/image';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerClass = scrollPosition > 0 ? 'bg-glassmorphic' : '';

    return (
        <>
            <div
                className={`z-30 hidden font-spaceGrotesk sm:flex justify-around items-center w-full h-[7.5vh] fixed text-white ${headerClass}`}
            >
                <div className="flex justify-around items-center w-full h-[7.5vh] fixed text-white">
                    <div className="w-[20%] h-full p-1">
                        <Image
                            src="/assets/vit-logo.png"
                            alt="logo"
                            height={10000}
                            width={10000}
                            className="h-full object-contain"
                        />
                    </div>
                    <div className="w-[80%] h-full flex justify-end pr-3 gap-x-10 items-center">
                        <div className="">About Us</div>
                        <div className="">Workshops</div>
                        <div className="">Hackathons</div>
                        <div className="">Team</div>
                        <div className="">{/* <Button /> */}</div>
                    </div>
                </div>
            </div>
            <div
                className={` z-30 flex sm:hidden justify-around items-center w-full h-[7.5vh] fixed text-white ${headerClass}`}
            >
                <div className="w-[20%] h-full flex justify-around items-center">
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M28 13.3335H4"
                            stroke="#9F2420"
                            strokeWidth="2.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M28 8H4"
                            stroke="#9F2420"
                            strokeWidth="2.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M28 18.6665H4"
                            stroke="#9F2420"
                            strokeWidth="2.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M28 24H4"
                            stroke="#9F2420"
                            strokeWidth="2.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className="w-[80%] "></div>
            </div>
        </>
    );
};

export default Header;
