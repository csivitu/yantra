import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { EventType } from '@/models/eventModel';
import moment from 'moment';

interface Props {
    event: EventType;
}

const EventsCard = ({ event }: Props) => {
    const [hover, setHover] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        sessionStorage.setItem('scrollPosition', String(window.pageYOffset));
        router.push(`/events/${event._id}`);
    };
    return (
        <>
            <div
                onClick={handleClick}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={`lg:h-[32.5vh] text-white lg:w-[80%] w-[90%] flex-row lg:flex-row font-spaceGrotesk bg-white bg-opacity-60 flex justify-around py-5 px-4 gap-3 items-center rounded-lg transition-all duration-300 ease-in-out cursor-pointer ${
                    hover ? 'glassMorphism' : 'glassMorphism2'
                }`}
            >
                <Image
                    src="/vit.png"
                    alt="photo"
                    height={10000}
                    width={10000}
                    className="w-[15vh] max-md:h-[15vh] lg:w-1/5 object-cover rounded-md"
                />
                <div className="w-4/5 h-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="text-xl sm:text-3xl font-semibold">
                            {event.title}
                        </div>
                        <div className="text-base sm:text-xl font-semibold">
                            From{' '}
                            {moment(event.startDate, 'DDMMYYYY').format(
                                'DD MMMM'
                            )}{' '}
                            To{' '}
                            {moment(event.endDate, 'DDMMYYYY').format(
                                'DD MMMM'
                            )}
                        </div>
                    </div>

                    <div className="text-lg line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Consequatur earum inventore maiores velit, dolor
                        deleniti laudantium iste omnis ipsum odit facilis
                        blanditiis fuga, laborum totam temporibus. Rem animi,
                        totam velit doloribus, blanditiis esse officia deserunt
                        ut obcaecati.
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventsCard;
