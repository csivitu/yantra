import React, { useEffect, useState } from 'react';
import Button from './button';
import { GetServerSidePropsContext } from 'next';
import ReactGA from 'react-ga';
import Image from 'next/image';
import { useWindowHeight } from '@react-hook/window-size';

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

    const handleMenuClick = (targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const yOffset = 0; // Adjust the yOffset value as per your requirement
            const y =
                targetElement.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const headerClass =
        scrollPosition > useWindowHeight() - 100
            ? 'glassMorphism sticky top-0'
            : scrollPosition > 50 //navbar length
            ? 'opacity-0'
            : 'opacity-100';

    return (
        <>
            <div
                className={`hidden lg:flex justify-between items-center w-full h-28 px-16 text-white z-50 transition-all duration-300 ease-in-out ${headerClass}`}
            >
                <Image
                    src="/assets/vit-logo.png"
                    alt="logo"
                    height={10000}
                    width={10000}
                    className="w-40 h-20 object-contain"
                />
                <div className="w-fit h-full flex gap-10 items-center font-spaceGrotesk font-semibold text-lg">
                    <div
                        className="cursor-pointer hover:text-black"
                        onClick={() => handleMenuClick('about-section')}
                    >
                        About Us
                    </div>

                    <div
                        className="cursor-pointer hover:text-black"
                        onClick={() => handleMenuClick('timeline-section')}
                    >
                        Timeline
                    </div>
                    <div
                        className="cursor-pointer hover:text-black"
                        onClick={() => handleMenuClick('events-section')}
                    >
                        Events
                    </div>
                    <div
                        className="cursor-pointer hover:text-black"
                        onClick={() => handleMenuClick('patrons-section')}
                    >
                        Patrons
                    </div>
                    <div
                        className="cursor-pointer hover:text-black"
                        onClick={() => handleMenuClick('sponsors-section')}
                    >
                        Sponsors
                    </div>
                    <div
                        className="cursor-pointer hover:text-black"
                        onClick={() => handleMenuClick('contact-section')}
                    >
                        Contact Us
                    </div>
                </div>
            </div>

            <div
                className={`z-30 flex lg:hidden static justify-around items-center w-full h-[7.5vh] text-white ${headerClass}`}
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
