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
import { useEffect } from 'react';

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
    const [slightHeight, setSlightHeight] = useState(230);
    const onlyWidth = useWindowWidth();
    useEffect(() => {
        if (onlyWidth < 840) {
            setSlightHeight(7200);
        } else {
            setSlightHeight(1200);
        }
    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            <div
                id="organizing-committee-section"
                className="w-fit text-white font-bronson uppercase text-5xl font-extrabold m-auto  pt-14 lg:pt-20 pb-10 max-md:text-4xl text-center max-lg:pb-0"
            >
                ORGANIZING COMMITTEE
            </div>

            <CarouselProvider
                naturalSlideHeight={slightHeight}
                naturalSlideWidth={1000}
                totalSlides={organizingCommittee.length}
                visibleSlides={4}
                infinite={true}
                dragEnabled={true}
                isPlaying={false}
                className="w-5/6 relative hidden items-center justify-center rounded-2xl py-3 lg:flex"
            >
                <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute top-10 z-30 opacity-30 left-8 focus:outline-none rounded-full focus:opacity-100 cursor-pointer"
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
                <Slider className="w-full  overflow-x-hidden overflow-y-hidden ">
                    {organizingCommittee.map((el, index) => {
                        const uniqueKey = `${index}-${el.name}-${el.position}`;
                        return (
                            <Slide
                                index={index}
                                key={uniqueKey}
                                className="w-full h-full text-center flex items-center justify-center flex-wrap"
                            >
                                <CarouselPatronsCard
                                    name={el.name}
                                    position={el.position}
                                    photo={'dsw/' + el.photo}
                                />
                            </Slide>
                        );
                    })}
                </Slider>
                <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 top-10 opacity-30 right-8 focus:outline-none rounded-full focus:opacity-100 cursor-pointer"
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
            </CarouselProvider>

            <CarouselProvider
                naturalSlideHeight={slightHeight * 0.25}
                naturalSlideWidth={1000}
                totalSlides={organizingCommittee.length}
                visibleSlides={2}
                infinite={true}
                dragEnabled={true}
                isPlaying={false}
                className="w-5/6 relative flex items-center justify-center rounded-2xl py-3 lg:hidden"
            >
                <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute hidden z-30 opacity-30 left-8 focus:outline-none rounded-full focus:opacity-100 cursor-pointer"
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
                <Slider className="w-full  overflow-x-hidden overflow-y-hidden ">
                    {organizingCommittee.map((el, index) => {
                        const uniqueKey = `${index}-${el.name}-${el.position}-23`;
                        return (
                            <Slide
                                index={index}
                                key={uniqueKey}
                                className="w-full h-full text-center flex  items-center justify-center flex-wrap"
                            >
                                <CarouselPatronsCard
                                    name={el.name}
                                    position={el.position}
                                    photo={'dsw/' + el.photo}
                                />
                            </Slide>
                        );
                    })}
                </Slider>
                <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 top-12 hidden opacity-30 right-8 focus:outline-none rounded-full focus:opacity-100 cursor-pointer"
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
            </CarouselProvider>

            {/* <div className="w-full flex justify-center items-center">
                <Loader />
            </div> */}
        </div>
    );
};

export default OCSection;
