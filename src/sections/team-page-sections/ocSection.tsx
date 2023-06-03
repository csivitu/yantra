import PatronsCard from '@/components/uncommon/landing-page-cards/patronsCard';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
} from '@react-hook/window-size';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    Dot,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CarouselPatronsCard from '@/components/uncommon/landing-page-cards/carouselPatronsCard';
import Loader from '@/components/common/loader';

const OCSection = () => {
    const organizingCommittee = [
        {
            name: 'Dr. NAIJU C D',
            position: 'DIRECTOR OF STUDENT WELFARE',
            photo: 'IMG_0025.jpg',
        },
        {
            name: 'Dr. AARTHY SL',
            position: 'ASST. DIRECTOR OF STUDENT WELFARE',
            photo: 'IMG_0001.jpg',
        },
        {
            name: 'Dr. SHARMILA N',
            position: 'ASST. DIRECTOR OF STUDENT WELFARE',
            photo: 'IMG_0005.jpg',
        },
        {
            name: 'Dr. SUJATHA R',
            position: 'ASST. DIRECTOR OF STUDENT WELFARE',
            photo: 'IMG_0009.jpg',
        },
        {
            name: 'Dr. SUDHAKAR N',
            position: 'ASST. DIRECTOR OF STUDENT WELFARE',
            photo: 'IMG_0013.jpg',
        },
        {
            name: 'Dr. SHANKAR GANESH S',
            position: 'ASST. DIRECTOR OF STUDENT WELFARE',
            photo: 'IMG_0014.jpg',
        },
        {
            name: 'Dr. SENTHIL KUMAR M',
            position: 'ASST. DIRECTOR OF STUDENT WELFARE',
            photo: 'IMG_0020.jpg',
        },
    ];

    const [width, height] = useWindowSize({
        wait: 1,
        leading: true,
    });

    console.log(width);

    return (
        <div className="w-full flex flex-col items-center">
            <div
                id="organizing-committee-section"
                className="w-fit text-white font-bronson uppercase text-5xl font-extrabold m-auto pt-20 pb-20 max-md:text-4xl text-center"
            >
                ORGANIZING COMMITTEE
            </div>

            {width ? (
                <CarouselProvider
                    naturalSlideHeight={
                        width > 1000 ? 1500 : width > 500 ? 1500 : 1400
                    }
                    naturalSlideWidth={1000}
                    totalSlides={organizingCommittee.length}
                    visibleSlides={width > 1000 ? 4 : 2}
                    infinite={true}
                    dragEnabled={true}
                    isPlaying={false}
                    className="w-5/6 relative flex items-center border-2 justify-center rounded-2xl py-3"
                >
                    <ButtonBack
                        role="button"
                        aria-label="slide backward"
                        className="absolute top-5 z-30 opacity-30 left-8 focus:outline-none rounded-full focus:opacity-100 cursor-pointer"
                        id="prev"
                    >
                        <Image
                            width={10000}
                            height={10000}
                            alt="quotes"
                            src={'/arrow_black.png'}
                            className="w-8 rotate-180"
                        />
                    </ButtonBack>
                    <Slider className="w-full ml-8 max-md:ml-5 overflow-x-hidden overflow-y-hidden ">
                        {organizingCommittee.map((el, index) => {
                            return (
                                <>
                                    <Slide
                                        index={index}
                                        key={index}
                                        className="w-full h-full text-center flex items-center justify-center"
                                    >
                                        <CarouselPatronsCard
                                            key={index}
                                            name={el.name}
                                            position={el.position}
                                            photo={'dsw/' + el.photo}
                                        />
                                    </Slide>
                                </>
                            );
                        })}
                    </Slider>
                    <ButtonNext
                        role="button"
                        aria-label="slide forward"
                        className="absolute z-30 top-5 opacity-30 right-8 focus:outline-none rounded-full focus:opacity-100 cursor-pointer"
                        id="next"
                    >
                        <Image
                            width={10000}
                            height={10000}
                            alt="quotes"
                            src={'/arrow_black.png'}
                            className="w-8"
                        />
                    </ButtonNext>

                    {/* <div className="absolute bottom-5">
                    {organizingCommittee.map((_, i) => {
                        return (
                            <Dot
                                key={i}
                                slide={i}
                                onClick={() => setCurrIndex(i)}
                                className="max-md:scale-75"
                            />
                        );
                    })}
                </div> */}
                </CarouselProvider>
            ) : (
                <div className="w-full flex justify-center items-center">
                    <Loader />
                </div>
            )}

            {/* <div className="h-max py-10 pb-32 flex justify-evenly text-black gap-y-10 items-center flex-wrap">
                {organizingCommitteeItems.map((el, index) => (
                    <PatronsCard
                        key={index}
                        name={el.name}
                        position={el.position}
                        photo={el.photo}
                    />
                ))}
            </div>{' '} */}
        </div>
    );
};

export default OCSection;
