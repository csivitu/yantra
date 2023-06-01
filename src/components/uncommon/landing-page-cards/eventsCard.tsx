import React, { useState } from 'react';
import Image from 'next/image';
const EventsCard = ({ event }) => {
    const [hover, setHover] = useState(false);
    return (
        <>
            <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={`lg:h-[32.5vh] text-white lg:w-[80%] w-[90%] flex-col lg:flex-row font-spaceGrotesk bg-white bg-opacity-60 flex justify-around py-5 px-4 gap-3 items-center rounded-lg transition-all duration-300 ease-in-out ${
                    hover ? 'glassMorphism' : 'glassMorphism2'
                }`}
            >
                <Image
                    src="/vit.png"
                    alt="photo"
                    height={10000}
                    width={10000}
                    className="w-[80%] lg:w-1/5 h-full object-cover rounded-md"
                />
                <div className="w-4/5 h-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="text-3xl font-semibold">
                            {event.title}
                        </div>
                        <div className="text-xl font-semibold">
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
            </div>
        </>
    );
};

export default EventsCard;
