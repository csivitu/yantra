import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimelineSection = () => {
    const arr = [1, 2, 3, 4, 5];

    return (
        <div>
            <VerticalTimeline lineColor="black">
                {arr.map((index) => {
                    return (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work font-spaceGrotesk"
                            icon={
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-8 h-8 bg-black rounded-full"></div>
                                </div>
                            }
                        >
                            <div
                                className={`w-full flex ${
                                    index % 2 === 0 ? 'flex-row-reverse' : ''
                                } items-center justify-between uppercase`}
                            >
                                <div className="w-2/3 text-6xl font-semibold">
                                    Opening Ceremony
                                </div>
                                <div
                                    className={`w-1/2 flex flex-col ${
                                        index % 2 === 0
                                            ? 'items-start'
                                            : 'items-end'
                                    }`}
                                >
                                    <div className="text-4xl font-extrabold">
                                        02 June
                                    </div>
                                    <div className="text-sm font-semibold tracking-widest capitalize">
                                        08:15AM to 09:00AM
                                    </div>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
};

export default TimelineSection;
