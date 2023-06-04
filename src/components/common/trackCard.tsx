import React from 'react';
import Image from 'next/image';
const TrackCard = () => {
    return (
        <>
            <div className=" relative py-6 font-spaceGrotesk bg-[#252525] bg-opacity-40 text-white  lg:min-h-[48vh] lg:w-[20vw] min-h-[25vh] w-[70%] rounded-xl">
                <div className="flex h-full w-full flex-col gap-1 sm:gap-3 px-6">
                    <Image
                        src="/goodHealthAndWellBeing.png"
                        alt="photo"
                        height={1000000}
                        width={1000000}
                        className="w-[3.5rem] sm:w-[7.25rem] object-contain "
                    />
                    <div className="text-3xl uppercase w-full text-[#279B48]">
                        Good Health and well being
                    </div>
                    <div className="text-sm w-full">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ducimus inventore rerum tenetur consequuntur in
                        nihil debitis labore accusantium modi mollitia
                        reprehenderit, voluptate obcaecati dignissimos ut iste
                        id veritatis quas? Harum, exercitationem nesciunt
                        laboriosam eos
                    </div>
                </div>
                <div className="absolute sm:-top-[3.725rem] -top-[1.5rem] -left-[1.5rem]  sm:-left-[3.6125rem]">
                    <Image
                        src="/gold-trophy.png"
                        alt="photo"
                        height={1000000}
                        width={1000000}
                        className="h-[3.5rem] w-[3.5rem] sm:h-[7.25rem] sm:w-[7.25rem] object-contain "
                    />
                </div>
            </div>
        </>
    );
};

export default TrackCard;
