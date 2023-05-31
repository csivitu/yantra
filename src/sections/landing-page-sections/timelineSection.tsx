import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimelineSection = () => {
    const arr = [1, 2, 3, 4, 5];

    return (
        <>
            <div className="w-fit text-white font-bronson uppercase text-8xl font-extrabold m-auto pt-32 pb-20">
                Time Line
            </div>
            <div id="timeline-section" className="w-full flex flex-col">
                <VerticalTimeline lineColor="black">
                    {arr.map((index) => {
                        return (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work font-spaceGrotesk"
                                icon={
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-5 h-5 bg-white rounded-full"></div>
                                    </div>
                                }
                            >
                                <div
                                    className={`w-full flex text-orange-500 ${
                                        index % 2 === 0
                                            ? 'flex-row-reverse'
                                            : ''
                                    } h-full items-center justify-between uppercase max-md:flex-row max-md:mt-4`}
                                >
                                    <div
                                        className={`w-2/3 ${
                                            index % 2 === 0
                                                ? 'sm:text-right'
                                                : 'text-left'
                                        } text-4xl font-semibold max-md:text-4xl`}
                                    >
                                        Opening Ceremony
                                    </div>
                                    <div
                                        className={`w-1/2 flex flex-col ${
                                            index % 2 === 0
                                                ? 'items-start'
                                                : 'items-end'
                                        } max-md:items-end`}
                                    >
                                        <div className="text-4xl font-extrabold max-md:text-2xl">
                                            02 June
                                        </div>
                                        <div className="text-sm font-semibold tracking-widest capitalize max-md:text-xs max-md:text-right">
                                            08:15AM to 09:00AM
                                        </div>
                                    </div>
                                </div>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default TimelineSection;
