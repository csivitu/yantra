import React from 'react';
import Image from 'next/image';
const AboutSection = () => {
    return (
        <>
            <div className="h-max">
                <div className="flex h-[20vh] text-4xl justify-around items-center w-full">
                    ABOUT YANTRA
                </div>
                <div className="flex h-[70vh] justify-around items-center sm:px-20">
                    <div className="w-[50%]  py-12 px-8 h-full">
                        <Image
                            src="/vit.png"
                            alt="photo"
                            height={10000}
                            width={10000}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                    <div className="w-[50%] h-full font-spaceGrotesk flex justify-around items-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi sunt, fuga porro maxime laudantium tempore
                        tempora sapiente assumenda minus! Maiores repellendus
                        earum tempore minima non labore temporibus tenetur
                        praesentium distinctio quisquam nulla, fuga laudantium
                        sequi laborum in reiciendis dolorum vel eaque architecto
                        odit. Nobis placeat at repudiandae autem in consectetur.
                    </div>
                </div>
                <div className="flex h-[20vh] text-4xl justify-around items-center w-full">
                    ABOUT VIT
                </div>
                <div className="flex h-[70vh] justify-around items-center sm:px-20">
                    <div className="w-[50%] py-12 px-8 h-full">
                        <Image
                            src="/vit.png"
                            alt="photo"
                            height={10000}
                            width={10000}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                    <div className="w-[50%] h-full font-spaceGrotesk flex justify-around items-center">
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
