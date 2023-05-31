import React from 'react';
import Image from 'next/image';
const EventsCard = () => {
    return (
        <>
            <div className="h-[32.5vh] w-[80%] font-spaceGrotesk bg-white bg-opacity-60 flex justify-around py-5 px-4 gap-3 items-center rounded-lg">
                <div className="w-[20%] h-full ">
                    <Image
                        src="/vit.png"
                        alt="photo"
                        height={10000}
                        width={10000}
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
                <div className="w-[80%] h-full">
                    <div>Name</div>
                    <div>time</div>
                    <div>desc</div>
                </div>
            </div>
        </>
    );
};

export default EventsCard;
