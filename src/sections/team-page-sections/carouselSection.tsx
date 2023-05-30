import React, { useState, useEffect } from 'react';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from 'next/image';
import { useWindowWidth } from '@react-hook/window-size';

const CarouselSection = () => {
    const members = ['', '', '', '', ''];
    const [slideHeight, setSlideHeight] = useState(230);
    const width = useWindowWidth();
    useEffect(() => {
        if (width < 640) setSlideHeight(400);
        else setSlideHeight(800);
    }, [width]);

    return (
        <div className="w-full h-screen flex flex-col items-center py-16 gap-12">
            <div className="font-bold text-6xl">Our Team</div>
            <CarouselProvider
                naturalSlideHeight={slideHeight}
                naturalSlideWidth={1000}
                totalSlides={members.length}
                visibleSlides={3}
                infinite={true}
                dragEnabled={true}
                isPlaying={true}
                className="w-full h-full flex items-center justify-center"
            >
                <Slider className="w-full h-full">
                    {members.map((el, index) => {
                        return (
                            <Slide
                                index={index}
                                key={index}
                                className="w-full h-full mx-6"
                            >
                                <div className="w-full h-full flex flex-col px-12">
                                    <div className="w-full h-3/5 bg-gray-800 rounded-t-xl py-6 px-4">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Perferendis distinctio
                                        quisquam sequi praesentium veritatis
                                        quidem, quasi ducimus. Omnis iste
                                        dolore, ducimus nulla totam rem
                                        dignissimos id aperiam est iusto in. Ad
                                        quo exercitationem suscipit voluptatem
                                        excepturi.
                                    </div>
                                    <div className="w-full h-2/5 bg-slate-600 rounded-b-xl"></div>
                                </div>
                            </Slide>
                        );
                    })}
                </Slider>
            </CarouselProvider>
        </div>
    );
};

export default CarouselSection;
