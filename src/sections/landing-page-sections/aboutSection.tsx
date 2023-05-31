import React from 'react';
import Image from 'next/image';
const AboutSection = () => {
    return (
        <>
            <div id="about-section" className="h-max">
                <div className="flex h-[10vh] lg:h-[20vh] text-4xl justify-around items-center w-full">
                    ABOUT YANTRA
                </div>
                <div className="flex lg:h-[70vh] flex-col lg:flex-row justify-around items-center lg:px-20">
                    <div className="lg:w-[50%] py-12 px-8 h-[60%] lg:h-full">
                        <Image
                            src="/vit.png"
                            alt="photo"
                            height={10000}
                            width={10000}
                            className="w-full h-full object-cover  rounded-md"
                        />
                    </div>
                    <div className="lg:w-[50%] w-[90%] h-[60%] lg:h-full font-spaceGrotesk flex justify-around items-center lg:text-left text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi sunt, fuga porro maxime laudantium tempore
                        tempora sapiente assumenda minus! Maiores repellendus
                        earum tempore minima non labore temporibus tenetur
                        praesentium distinctio quisquam nulla, fuga laudantium
                        sequi laborum in reiciendis dolorum vel eaque architecto
                        odit. Nobis placeat at repudiandae autem in consectetur.
                    </div>
                </div>
                <div className="flex h-[10vh] lg:h-[20vh] text-4xl justify-around items-center w-full">
                    ABOUT VIT
                </div>
                <div className="flex h-[70vh] flex-col lg:flex-row justify-around items-center lg:px-20">
                    <div className="lg:w-[50%] py-12 px-8 h-[60%] lg:h-full">
                        <Image
                            src="/vit.png"
                            alt="photo"
                            height={10000}
                            width={10000}
                            className="w-full h-full object-cover  rounded-md"
                        />
                    </div>
                    <div className="lg:w-[50%] w-[90%] h-[60%] lg:h-full font-spaceGrotesk flex justify-around items-center lg:text-left text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi sunt, fuga porro maxime laudantium tempore
                        tempora sapiente assumenda minus! Maiores repellendus
                        earum tempore minima non labore temporibus tenetur
                        praesentium distinctio quisquam nulla, fuga laudantium
                        sequi laborum in reiciendis dolorum vel eaque architecto
                        odit. Nobis placeat at repudiandae autem in consectetur.
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSection;
