import React from 'react';
import Image from 'next/image';
const SDGAboutSection = () => {
    return (
        <>
            <div className="h-max">
                <div className="w-full mt-20 max-md:text-4xl h-[20vh] flex justify-around items-center text-white font-bronson uppercase text-5xl font-extrabold m-auto text-center">
                    ABOUT HACKATHON
                </div>
                <div className="flex flex-col lg:flex-row justify-around items-center lg:px-20">
                    <div className="lg:w-[50%] py-8 px-16 h-[60%] lg:h-full max-md:pt-0 max-md:pb-8">
                        <Image
                            src="/devspace.JPG"
                            alt="photo"
                            height={10000}
                            width={10000}
                            className="lg:w-[50vw] lg:h-[50vh] h-[30vh] w-[100%] object-cover border-[2px] border-white rounded-md"
                        />
                    </div>
                    <div className="lg:w-[50%] text-xl text-white w-[90%] h-[60%] lg:h-full font-spaceGrotesk flex justify-around items-center lg:text-left text-center flex-col">
                        <p className="text-2xl py-3 font-bold w-full">
                            WHAT IS SDG?
                        </p>
                        <p className="w-full">
                            The United Nations’ 17{' '}
                            <span className="underline underline-offset-2 opacity-80">
                                Sustainable Development Goals (SDGs)
                            </span>{' '}
                            include economic, social, and environmental topics
                            to prioritize until 2030. Following the Millennium
                            Development Goals primarily aimed at developing
                            countries, the SDGs were introduced in 2016 to both
                            include more broad topics and address all nations.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row-reverse justify-around items-center lg:px-20">
                    <div className="lg:w-[50%] py-8 px-16 h-[60%] lg:h-full max-md:pt-0 max-md:pb-8">
                        <Image
                            src="/devspace.JPG"
                            alt="photo"
                            height={10000}
                            width={10000}
                            className="lg:w-[50vw] lg:h-[50vh] h-[30vh] w-[100%] object-cover border-[2px] border-white rounded-md"
                        />
                    </div>
                    <div className="lg:w-[50%] text-xl text-white w-[90%] h-[60%] lg:h-full font-spaceGrotesk flex justify-around items-center lg:text-left text-center flex-col">
                        <p className="text-2xl py-3 font-bold w-full">
                            WHAT IS SDG?
                        </p>
                        <p className="w-full">
                            The United Nations’ 17{' '}
                            <span className="underline underline-offset-2 opacity-80">
                                Sustainable Development Goals (SDGs)
                            </span>{' '}
                            include economic, social, and environmental topics
                            to prioritize until 2030. Following the Millennium
                            Development Goals primarily aimed at developing
                            countries, the SDGs were introduced in 2016 to both
                            include more broad topics and address all nations.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SDGAboutSection;
