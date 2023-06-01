import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimelineSection = () => {
    const arr = [
        {
            title: 'week inauguration',
            date: '01 JUNE',
            time: '08:15 AM to 09:00 AM',
        },
        {
            title: 'EVENTS BEGIN',
            date: '01 JUNE',
            time: '08:15 AM to 09:00 AM',
        },
        ,
        {
            title: 'YANTRA HACK BEGINS',
            date: '02 JUNE',
            time: '08:15 AM to 09:00 AM',
        },
        ,
        {
            title: 'YANTRA HACK ENDS',
            date: '06 JUNE',
            time: '08:15 AM to 09:00 AM',
        },
        ,
        {
            title: 'EVENTS CONCLUDE',
            date: '06 JUNE',
            time: '08:15 AM to 09:00 AM',
        },
        {
            title: 'CLOSING CEREMONY',
            date: '06 JUNE',
            time: '08:15 AM to 09:00 AM',
        },
    ];

    return (
        <>
            <div
                id="timeline-section"
                className="w-fit max-md:pb-4 text-white font-bronson uppercase text-5xl font-extrabold m-auto pt-32 pb-20"
            >
                Time Line
            </div>
            <div className="w-full flex flex-col">
                <VerticalTimeline lineColor="black">
                    {arr.map((el, index) => {
                        return (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work font-spaceGrotesk"
                                icon={
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="w-6 h-6 bg-white rounded-full"></div>
                                    </div>
                                }
                            >
                                <div
                                    className={`w-full flex ${
                                        index % 2 === 0
                                            ? 'flex-row-reverse'
                                            : ''
                                    } h-full items-center justify-between gap-4 uppercase max-md:flex-row max-md:mt-4`}
                                >
                                    <div
                                        className={`w-2/3 ${
                                            index % 2 === 0
                                                ? 'sm:text-right'
                                                : 'text-left'
                                        } text-4xl font-semibold max-md:text-xl`}
                                    >
                                        {el?.title}
                                    </div>
                                    <div
                                        className={`w-1/2 flex flex-col ${
                                            index % 2 === 0
                                                ? 'items-start'
                                                : 'items-end'
                                        } max-md:items-end`}
                                    >
                                        <div className="text-4xl font-extrabold max-md:text-2xl max-md:text-right">
                                            {el?.date}
                                        </div>
                                        <div className="text-sm font-semibold tracking-widest capitalize max-md:text-xs max-md:text-right">
                                            {el?.time}
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
