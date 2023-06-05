import React from 'react';
import Image from 'next/image';

interface Props {
    name: string;
    rank: string;
    text: string;
    colour: string;
    iconSource: string;
}
const TrackCard = ({ name, rank, text, colour, iconSource }: Props) => {
    return (
        <>
            <div className=" relative py-6 font-spaceGrotesk bg-[#252525] bg-opacity-40 text-white  lg:min-h-[48vh] lg:w-[20vw] min-h-[25vh] w-[70%] rounded-xl">
                <div className="flex h-full w-full flex-col gap-1 sm:gap-3 px-6">
                    <Image
                        src={`${iconSource}`}
                        alt="photo"
                        height={1000000}
                        width={1000000}
                        className="w-[3rem] h-[3rem] sm:w-[4rem] object-contain"
                    />
                    <div
                        className={`text-xl uppercase w-full`}
                        style={{ color: colour }}
                    >
                        {name}
                    </div>
                    <div className="text-sm w-full">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ducimus inventore rerum tenetur consequuntur in
                        nihil deb
                    </div>
                </div>
                <div className="text-stroke-track-rank absolute sm:-top-[1.5rem] -top-[1.5rem] -left-[1.5rem] -rotate-[20deg] sm:-left-[1.5rem] text-5xl">
                    #{rank}
                </div>
            </div>
        </>
    );
};

export default TrackCard;
