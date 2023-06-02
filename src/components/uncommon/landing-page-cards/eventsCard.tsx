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
                className={`lg:h-[32.5vh] text-white lg:w-[80%] w-[90%] flex-row lg:flex-row font-spaceGrotesk  bg-opacity-40 bg-no-repeat bg-cover border-2 flex justify-around py-5 px-4 gap-6 items-center rounded-lg transition-all duration-300 ease-in-out cursor-pointer  ${
                    hover ? 'glassMorphism2' : ''
                }`}
            >
                <Image
                    src={`/events/${event.coverPic}`}
                    alt="photo"
                    height={10000}
                    width={10000}
                    className="h-48 w-32 max-md:h-[15vh] lg:w-1/5 object-cover rounded-md"
                />
                <div className="w-4/5 h-full flex flex-col justify-center gap-4">
                    <div className="flex flex-col  gap-2">
                        <div className="text-xl sm:text-3xl font-semibold max-sm:text-base max-sm:line-clamp-2">
                            {event.title}
                        </div>
                        <div className="text-base sm:text-xl font-semibold max-sm:text-xs">
                            From {moment(event.startDate).format('DD MMMM')} To{' '}
                            {moment(event.endDate).format('DD MMMM')}
                        </div>
                    </div>

                    <div className="text-lg line-clamp-2 max-sm:hidden">
                        {event.description}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventsCard;
