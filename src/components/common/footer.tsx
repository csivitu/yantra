import React from 'react';
import SocialMediaLinks from '../uncommon/social-media-links/socialMediaLinks';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();
    const handles = [
        {
            name: 'youtube',
            link: 'https://www.youtube.com/@VITUniversityVellore',
        },
        { name: 'twitter', link: 'https://twitter.com/VIT_univ' },
        { name: 'instagram', link: 'https://www.instagram.com/vellore_vit' },
        {
            name: 'linkedIn',
            link: 'https://www.linkedin.com/school/vellore-institute-of-technology',
        },
    ];

    return (
        <>
            <div
                id="contact-section"
                className="font-spaceGrotesk text-right w-full bg-[#6C6C6C] text-white bg-opacity-[0.16]  max-lg:[h-10vh] lg:h-[30vh] flex justify-around items-center"
            >
                <div className="w-[30%] sm:w-1/3 h-full gap-y-3 p-3">
                    <div className="text-2xl">LINKS</div>
                    <div className="flex h-[80%] w-full sm:flex-row flex-row flex-wrap mt-1 justify-end items-center gap-4">
                        {handles.map((handle, index) => (
                            <Image
                                key={index}
                                width={10000}
                                height={10000}
                                src={`/${handle.name}.png`}
                                alt="/"
                                onClick={() => {
                                    router.push(`${handle.link}`);
                                }}
                                className="w-8 h-8 object-contain  cursor-pointer"
                            />
                        ))}
                    </div>
                </div>
                <div className="w-1/3 h-full sm:px-3 justify-around hidden sm:flex items-center sm:items-start lg:items-center">
                    <Image
                        src="/logoYantra.png"
                        alt="Logo"
                        height={1000000}
                        width={100000}
                        className="lg:w-[20vw] lg:h-[20vh] object-contain"
                    />
                </div>
                <div className="w-[70%] flex justify-around items-center flex-col sm:w-1/3 h-full sm:gap-y-3 sm:p-3 text-left">
                    <div className="text-2xl w-full h-[20%]">CONTACT US </div>
                    <div className="gap-2 flex w-full h-[80%] text-sm flex-col sm:mt-1">
                        <p className="w-full">+91 91555 94196</p>
                        <p className="w-full">+91 81253 51715</p>
                        <p className="w-full">+91 76748 05872</p>
                    </div>
                </div>
            </div>
            <Link
                href={'https://csivit.com/'}
                className="h-[10vh] group cursor-pointer bg-[#6C6C6C] text-white bg-opacity-[0.16] text-center flex justify-center gap-2 items-center"
            >
                <span className="group-hover:text-[#FFA412] flex justify-center gap-2 items-center">
                    <p>Made with </p>
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:text-[#E8505B]"
                    >
                        <path
                            d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>{' '}
                    <p>by CSI-VIT</p>
                </span>
            </Link>
        </>
    );
};

export default Footer;
