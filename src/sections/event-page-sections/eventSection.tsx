import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import moment from 'moment';
import { EventType } from '@/models/eventModel';
import Link from 'next/link';

interface Props {
    event: EventType;
}

const EventSection = ({ event }: Props) => {
    const router = useRouter();

    return (
        <>
            <div className=" flex h-max gap-3 lg:flex-row flex-col-reverse text-white font-spaceGrotesk justify-around items-center px-16 max-md:px-8">
                <div className="lg:w-[60%] ">
                    <div className=" h-[7.5vh] flex justify-start gap-2 items-center max-md:hidden">
                        <div
                            onClick={() => router.back()}
                            className="flex justify-start gap-2 items-center cursor-pointer"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="cursor-pointer"
                            >
                                <path
                                    d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <div className="cursor-pointer"></div>
                            Back
                        </div>
                    </div>{' '}
                    <div className="h-fit text-5xl text-white font-bronson max-md:my-4 max-md:text-4xl">
                        {event.title}
                    </div>
                    <div className="text-sm mb-8 font-spaceGrotesk text-[#FFA412] max-md:mb-4">
                        {event.organisedBy.length > 1 ? (
                            <>
                                {event.organisedBy.map((club, i) => {
                                    if (event.organisedBy.length - 1 == i)
                                        return <>{club}</>;
                                    else return <>{club} | </>;
                                })}
                            </>
                        ) : (
                            <>{event.organisedBy[0]}</>
                        )}
                    </div>
                    <div className="flex md:flex-col gap-4 max-md:w-full max-md:justify-between mb-6">
                        <div className="h-max">
                            <div className="text-xs font-spaceGrotesk text-white opacity-[0.4]">
                                FROM
                            </div>
                            <div className="text-xl font-spaceGrotesk">
                                {moment(event.startDate, 'MMDDYYYY').format(
                                    'DD MMMM'
                                )}
                                {' | '}
                                {moment(event.startTime, 'HH:mm:ss A').format(
                                    'hh:mm A'
                                )}
                            </div>
                        </div>
                        <div className="h-max">
                            <div className="text-xs font-spaceGrotesk text-white opacity-[0.4]">
                                TO
                            </div>
                            <div className="font-spaceGrotesk text-xl">
                                {moment(event.endDate, 'MMDDYYYY').format(
                                    'DD MMMM'
                                )}
                                {' | '}
                                {moment(event.endTime, 'HH:mm:ss A').format(
                                    'hh:mm A'
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-start gap-12">
                        <div className="h-max">
                            <div className="text-xs font-spaceGrotesk text-white opacity-[0.4]">
                                VENUE
                            </div>
                            <div className="font-spaceGrotesk text-xl">
                                {event.venue}
                            </div>
                            <br />
                        </div>
                        <div className="h-max">
                            <div className="text-xs font-spaceGrotesk text-white opacity-[0.4]">
                                STUDENT COORDINATOR
                            </div>
                            {event.studentCoordName?.map(
                                (studentCord, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="font-spaceGrotesk text-xl flex gap-2 items-center capitalize "
                                        >
                                            <div>{studentCord}</div>
                                            <div className="text-sm">
                                                (
                                                {event.studentCordNumber[index]}
                                                )
                                            </div>
                                        </div>
                                    );
                                }
                            )}

                            <br />
                        </div>
                    </div>
                    <div className="pb-4">{event.description}</div>
                    <Link
                        href={event.link}
                        target="_blank"
                        className={`flex w-fit justify-start gap-2 max-md:my-6 my-8 hover:underline underline-offset-4 ${
                            event.link === '' ? 'hidden' : ''
                        }`}
                    >
                        <Image
                            id="shadow-image"
                            src={'/globe.png'}
                            alt="photo"
                            height={10000}
                            width={10000}
                            className="w-6 h-6 object-contain"
                        />
                        <div>{event.link}</div>
                    </Link>
                </div>
                <div className="h-full lg:w-[40%] flex justify-around items-center">
                    <Image
                        id="shadow-image"
                        src={`/events/${event.coverPic}`}
                        alt="photo"
                        height={10000}
                        width={10000}
                        className="lg:w-[60vh] lg:h-[60vh] rounded-xl"
                    />
                </div>
            </div>
        </>
    );
};

export default EventSection;
