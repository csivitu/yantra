import { useRouter } from 'next/router';
import React from 'react';
import SearchBar from '@/components/common/searchBar';
import ProjectCard from '@/components/uncommon/sdg-admin-page-cards/ProjectCard';
const Index = () => {
    const router = useRouter();
    return (
        <>
            <div className="w-full lg:px-32 flex items-center max-md:flex-col">
                <div className="lg:w-[40%] flex items-center gap-2 font-spaceGrotesk uppercase text-3xl font-extrabold py-8 text-white">
                    <div className=" h-[7.5vh] flex justify-start gap-2 items-center max-md:hidden">
                        <div
                            onClick={() => router.push('/sdg')}
                            className="flex justify-start gap-2 items-center cursor-pointer text-base"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="cursor-pointer"
                            >
                                <path
                                    d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <div className="cursor-pointer"></div>
                            Back
                        </div>
                    </div>
                    <div>ADMIN</div>
                </div>
                {/* CHANGE SEARCH BAR MAKE DUPLICATE WITH NEW FILTERS */}
                <div className="w-[90%] lg:w-[60%]">
                    <SearchBar initialSearch="" />
                </div>
            </div>
            <div className="h-max px-4 lg:px-20 py-10 gap-y-5 sm:gap-y-3 flex justify-around items-start flex-col">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </>
    );
};

export default Index;
