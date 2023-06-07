import React, { useEffect, useState } from 'react';

import { GetServerSidePropsContext } from 'next';
import ReactGA from 'react-ga';
import Image from 'next/image';
import { useWindowHeight } from '@react-hook/window-size';
import { useRouter } from 'next/router';
import NavModal from './NavModal';

interface HeaderProps {
	onendpoint: string;
}

const Header: React.FC<HeaderProps> = ({onendpoint}) => {
    const [modalVisibility, setModalVisibility] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);

    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuClick = async (targetId: string) => {
        if(onendpoint === "True"){
            await new Promise<void>((resolve) => {
                router.push('/').then(() => {
                  resolve();
                });
            });
        }
        if (
            router.asPath.split('/')[1].startsWith('event') &&
            targetId !== 'events-section'
        )
            router.push(`/#${targetId}`);

        if (router.asPath.split('/')[1].startsWith('team'))
            router.push(`/#${targetId}`);
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

    const windowHeight = useWindowHeight();

    const headerClass =
        scrollPosition === 0
            ? 'opacity-100'
            : scrollPosition > windowHeight - 100
            ? 'glassMorphism sticky top-0'
            : scrollPosition > 50 //navbar length
            ? 'opacity-0'
            : 'opacity-100';

    // add active tab opacity

    return (
        <>
            <div
                className={`hidden lg:flex justify-between items-center w-full h-[4rem] px-16 text-white z-[100] transition-all duration-300 ease-in-out ${headerClass}`}
            >
                <div className="w-[20%] h-full flex justify-around items-center">
                    <Image
                        src="/vitLogo2.png"
                        alt="logo"
                        height={10000}
                        width={10000}
                        className="w-[15vw] px-5 h-auto object-cover cursor-pointer"
                        onClick={() => {
                            router.push('/');
                        }}
                    />
                </div>
                <div className="w-[80%] h-full flex gap-10 items-center justify-end font-spaceGrotesk font-semibold text-lg">
                    <div
                        className="cursor-pointer relative hover-underline-animation"
                        onClick={() => handleMenuClick('about-section')}
                    >
                        <div>About Us</div>
                    </div>

                    <div
                        className="cursor-pointer hover-underline-animation"
                        onClick={() => handleMenuClick('timeline-section')}
                    >
                        Timeline
                    </div>
                    <div
                        className="cursor-pointer hover-underline-animation"
                        onClick={() => router.push('/sdg')}
                    >
                        YANTRA Hackathon
                    </div>
                    <div
                        className="cursor-pointer hover-underline-animation"
                        onClick={() => handleMenuClick('events-section')}
                    >
                        Events
                    </div>
                    <div
                        className="cursor-pointer hover-underline-animation"
                        onClick={() => router.push('/play')}
                    >
                        Play
                    </div> 
                    <div
                        className="cursor-pointer hover-underline-animation"
                        onClick={() => router.push('/team')}
                    >
                        Team
                    </div>

                    <div
                        className="cursor-pointer hover-underline-animation"
                        onClick={() => handleMenuClick('contact-section')}
                    >
                        Contact Us
                    </div>
                </div>
            </div>

            <div
                className={`z-30 flex lg:hidden static justify-around items-center w-full h-[7.5vh] text-white ${headerClass}`}
            >
                <div
                    onClick={() => {
                        router.push('/');
                    }}
                    className="w-[20%] h-full flex justify-around items-center"
                >
                    <Image
                        src="/vitLogoCircle.png"
                        alt="logo"
                        height={10000}
                        width={10000}
                        className="w-16 p-3 object-cover cursor-pointer"
                        onClick={() => {
                            router.push('/');
                        }}
                    />
                </div>
                <div className="w-[60%] "></div>
                <div
                    onClick={() => {
                        setModalVisibility(true);
                    }}
                    className="w-[20%] h-full flex justify-around items-center"
                >
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M28 13.3335H4"
                            stroke="#FFFFFF"
                            strokeWidth="2.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M28 8H4"
                            stroke="#FFFFFF"
                            strokeWidth="2.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M28 18.6665H4"
                            stroke="#FFFFFF"
                            strokeWidth="2.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M28 24H4"
                            stroke="#FFFFFF"
                            strokeWidth="2.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
            {modalVisibility !== false && (
                <NavModal
                    modalVisibility={setModalVisibility}
                    visible={true}
                    // setModalDataFunc={() => {
                    //     setModalData();
                    // }}
                />
            )}
        </>
    );
};

export default Header;
