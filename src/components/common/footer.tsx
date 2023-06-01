import React from 'react';
import SocialMediaLinks from '../uncommon/social-media-links/socialMediaLinks';
import Image from 'next/image';
const Footer = () => {
    return (
        <>
            <div
                id="contact-section"
                className="font-spaceGrotesk text-right w-full bg-[#6C6C6C] text-white bg-opacity-[0.16] h-[30vh] flex justify-around items-center"
            >
                <div className="w-1/3 h-full gap-y-3 p-3">
                    <div className="text-2xl">LINKS</div>
                    <SocialMediaLinks />
                </div>
                <div className="w-1/3 h-full flex justify-around items-center">
                    <Image
                        src="/yantraLogo.png"
                        alt="Logo"
                        height={1000000}
                        width={100000}
                        className="w-[20vw] h-[20vh] object-cover"
                    />
                </div>
                <div className="w-1/3 h-full gap-y-3 p-3 text-left">
                    <div className="text-2xl w-full">CONTACT US</div>
                    <div className="flex justify-start items-center gap-3">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M22 6L12 13L2 6"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <p>dsw.vit.ac.in</p>
                    </div>
                </div>
            </div>
            <div className="h-[10vh] bg-[#6C6C6C] text-white bg-opacity-[0.16] text-center flex justify-center gap-2 items-center">
                Made with{' '}
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                    ></path>
                </svg>{' '}
                by CSI
            </div>
        </>
    );
};

export default Footer;
