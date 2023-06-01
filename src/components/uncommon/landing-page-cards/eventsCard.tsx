import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EventsCard = ({ event }) => {
    const [hover, setHover] = useState(false);
    return (
        <>
            <Link
                href={`/events/${event._id}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={`lg:h-[32.5vh] text-white lg:w-[80%] w-[90%] flex-row lg:flex-row font-spaceGrotesk bg-white bg-opacity-60 flex justify-around py-5 px-4 gap-3 items-center rounded-lg transition-all duration-300 ease-in-out ${
                    hover ? 'glassMorphism' : 'glassMorphism2'
                }`}
            >
                <Image
                    src="/vit.png"
                    alt="photo"
                    height={10000}
                    width={10000}
                    className="w-[15vh] h-[15vh] lg:w-1/5 object-cover rounded-md"
                />
                <div className="w-4/5 h-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="text-xl sm:text-3xl font-semibold">
                            {event.title}
                        </div>
                        <div className="text-base sm:text-xl font-semibold">
                            Date and Time
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
            </Link>
        </>
    );
};

export default EventsCard;
