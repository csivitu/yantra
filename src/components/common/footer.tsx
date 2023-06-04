import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const handles = [
        {
            name: 'youtube',
            link: 'https://www.youtube.com/@VITUniversityVellore',
            photo: 'youtube.png',
        },
        {
            name: 'twitter',
            link: 'https://twitter.com/VIT_univ',
            photo: 'twitter.png',
        },
        {
            name: 'instagram',
            link: 'https://www.instagram.com/vellore_vit',
            photo: 'instagram.png',
        },
        {
            name: 'linkedIn',
            link: 'https://www.linkedin.com/school/vellore-institute-of-technology',
            photo: 'linkedinLogo.png',
        },
    ];
    return (
        <div className="w-full bg-[#6C6C6C]  bg-opacity-[0.16]">
            <div
                id="contact-section"
                className="font-spaceGrotesk text-right w-2/3 m-auto  text-white  max-lg:[h-10vh] lg:h-[30vh] flex justify-around items-center"
            >
                <div className="w-fit flex justify-around items-center max-lg:items-start flex-col sm:w-1/3 h-full sm:gap-y-3 sm:p-3 text-left">
                    <div className="text-2xl w-full h-[20%] max-lg:py-4">
                        LINKS
                    </div>
                    <div className="gap-2 flex w-full h-[80%] max-lg:flex-row max-lg:w-1/2 max-lg:flex-wrap text-sm flex-col sm:mt-1">
                        {handles.map((handle, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={handle.link}
                                    className="flex items-center gap-2 capitalize text-base w-fit"
                                >
                                    <Image
                                        className="w-8 h-8 object-contain"
                                        width={10000}
                                        height={10000}
                                        alt="/"
                                        src={`/${handle.photo}`}
                                    />
                                    <div className="max-lg:hidden">
                                        {handle.name}
                                    </div>
                                </Link>
                            );
                        })}
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
                <div className="w-fit flex justify-around items-end flex-col sm:w-1/3 h-full sm:gap-y-3 sm:p-3 text-left">
                    <div className="text-2xl w-fit h-[20%]  max-lg:py-4">
                        CONTACT US{' '}
                    </div>
                    <div className="gap-2 flex w-fit h-[80%] text-base max-lg:text-sm flex-col sm:mt-1">
                        <div className="flex items-center gap-2 text-base w-full justify-end">
                            <div className="max-lg:text-sm">
                                +91 81253 51715
                            </div>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                transform="rotate(0)"
                                className="w-7 h-7"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke="#CCCCCC"
                                    stroke-width="0.096"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {' '}
                                    <path
                                        d="M18.4 20.75H18.17C15.5788 20.4681 13.0893 19.5846 10.9 18.17C8.86618 16.8747 7.13938 15.1513 5.84 13.12C4.42216 10.925 3.53852 8.42823 3.26 5.83001C3.22816 5.52011 3.2596 5.20696 3.35243 4.90958C3.44525 4.6122 3.59752 4.33677 3.8 4.10001C3.99694 3.86008 4.24002 3.66211 4.51486 3.51782C4.78969 3.37354 5.09068 3.28587 5.4 3.26001H8C8.56312 3.26058 9.10747 3.46248 9.53476 3.82925C9.96205 4.19602 10.2441 4.70349 10.33 5.26001C10.425 5.97489 10.6028 6.67628 10.86 7.35001C11.0164 7.77339 11.0487 8.23264 10.9531 8.67375C10.8574 9.11485 10.6378 9.51947 10.32 9.84001L9.71 10.45C10.6704 11.9662 11.9587 13.2477 13.48 14.2L14.09 13.6C14.4105 13.2822 14.8152 13.0626 15.2563 12.9669C15.6974 12.8713 16.1566 12.9036 16.58 13.06C17.2545 13.3148 17.9556 13.4926 18.67 13.59C19.236 13.6751 19.7515 13.9638 20.1198 14.402C20.488 14.8403 20.6837 15.3978 20.67 15.97V18.37C20.67 18.9942 20.4227 19.593 19.9823 20.0353C19.5419 20.4776 18.9442 20.7274 18.32 20.73L18.4 20.75ZM8 4.75001H5.61C5.49265 4.75777 5.37809 4.78924 5.27325 4.84252C5.1684 4.8958 5.07545 4.96979 5 5.06001C4.92658 5.14452 4.871 5.24302 4.83663 5.34957C4.80226 5.45612 4.7898 5.56852 4.8 5.68001C5.04249 8.03679 5.83362 10.304 7.11 12.3C8.28664 14.1467 9.85332 15.7134 11.7 16.89C13.6973 18.1798 15.967 18.9878 18.33 19.25C18.4529 19.2569 18.5759 19.2383 18.6912 19.1953C18.8065 19.1522 18.9117 19.0857 19 19C19.1592 18.8368 19.2489 18.6181 19.25 18.39V16C19.2545 15.7896 19.1817 15.5848 19.0453 15.4244C18.9089 15.2641 18.7184 15.1593 18.51 15.13C17.6839 15.0189 16.8724 14.8177 16.09 14.53C15.9359 14.4724 15.7686 14.4596 15.6075 14.4933C15.4464 14.5269 15.2982 14.6055 15.18 14.72L14.18 15.72C14.0629 15.8342 13.912 15.9076 13.7499 15.9292C13.5877 15.9508 13.423 15.9195 13.28 15.84C11.1462 14.6342 9.37997 12.8715 8.17 10.74C8.08718 10.598 8.05402 10.4324 8.07575 10.2694C8.09748 10.1065 8.17286 9.95538 8.29 9.84001L9.29 8.84001C9.40468 8.72403 9.48357 8.57751 9.51726 8.41793C9.55095 8.25835 9.53802 8.09244 9.48 7.94001C9.19119 7.15799 8.98997 6.34637 8.88 5.52001C8.85519 5.30528 8.75133 5.10747 8.58865 4.96513C8.42597 4.82278 8.21613 4.7461 8 4.75001Z"
                                        fill="#ffffff"
                                    ></path>{' '}
                                </g>
                            </svg>
                        </div>
                        <div className="flex items-center gap-2 text-base w-full justify-end">
                            <div className="max-lg:text-xs">
                                director.sw@vit.ac.in
                            </div>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#ffffff"
                                className="w-6 h-6"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {' '}
                                    <path
                                        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                                        stroke="#ffffff"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>{' '}
                                    <rect
                                        x="3"
                                        y="5"
                                        width="18"
                                        height="14"
                                        rx="2"
                                        stroke="#ffffff"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                    ></rect>{' '}
                                </g>
                            </svg>
                        </div>
                        <div className="flex items-center gap-2 capitalize text-base w-full justify-end">
                            <div className="max-lg:text-sm">MB 210</div>
                            <svg
                                fill="#ffffff"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#ffffff"
                                className="w-6 h-6"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {' '}
                                    <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>{' '}
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <Link
                href={'https://csivit.com/'}
                target="_blank"
                className="w-fit m-auto h-[10vh] group cursor-pointer  text-white bg-opacity-[0.16] text-center flex justify-center gap-2 items-center"
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
        </div>
    );
};

export default Footer;
