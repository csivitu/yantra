import React from 'react';
import Image from 'next/image';
const SDGAboutSection = () => {
    return (
        <>
            <div
                id="aboutSDG-section"
                className="h-max flex flex-col max-lg:gap-16"
            >
                <div className="w-full mt-20 max-md:text-4xl h-[20vh] flex justify-around items-center text-white font-bronson uppercase text-5xl font-extrabold m-auto text-center">
                    ABOUT HACKATHON
                </div>
                <div className="flex max-lg:flex-col justify-around items-center  lg:px-36 gap-12">
                    <Image
                        src="/SDGLogo.png"
                        alt="photo"
                        height={10000}
                        width={10000}
                        className="lg:w-[36vw] lg:h-[50vh] h-[30vh] px-10 w-[100%] object-contain  rounded-md"
                    />

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
                <div className="flex flex-col  lg:flex-row-reverse justify-around items-center lg:px-36 gap-12">
                    <Image
                        src="/SDGLogo.png"
                        alt="photo"
                        height={10000}
                        width={10000}
                        className="lg:w-[36vw] lg:h-[50vh] px-10 h-[30vh] w-[100%] object-contain  rounded-md"
                    />

                    <div className="lg:w-[50%] text-xl text-white w-[90%] h-[60%] lg:h-full font-spaceGrotesk flex justify-around items-center lg:text-left text-center flex-col">
                        <p className="text-2xl py-3 font-bold w-full">
                            WHAT IS SDG?
                        </p>
                        <p className="w-full">
                            The SDG Hack’23 is centered around the sustainable
                            developmental goals of the United Nations in keeping
                            with the sustainability goal of G20. With innovation
                            taking centre-stage, make a difference to our planet
                            with your ideas. As the finale of the Yantra
                            Innovation Week 2023, this is your chance to be a
                            part of the sustainability revolution and create
                            products that matter, for change that matters.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SDGAboutSection;
