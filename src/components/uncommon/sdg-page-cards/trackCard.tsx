import React, { useState } from 'react';
import Image from 'next/image';
import TrackModal from './trackModal';

interface Props {
    name: string;
    rank: string;
    text: string;
    colour: string;
    iconSource: string;
}
const TrackCard = ({ name, rank, text, colour, iconSource }: Props) => {
    const [modalVisibility, setModalVisibility] = useState(false);

    return (
        <>
            <div
                onClick={() => {
                    setModalVisibility(true);
                }}
                className="cursor-pointer relative max-sm:py-5 py-3 font-spaceGrotesk bg-[#252525] bg-opacity-40 text-white   lg:w-[20vw] max-sm:h-[32.5vh] sm:h-[40vh] 2xl:h-[30vh] w-[70%] rounded-xl"
            >
                <div className="flex h-full w-full flex-col gap-1 sm:gap-3 px-4">
                    <Image
                        src={`${iconSource}`}
                        alt="photo"
                        height={1000000}
                        width={1000000}
                        className="w-[2rem] h-[2rem] sm:w-[3rem] object-contain"
                    />
                    <div
                        className={`text-xl uppercase w-full`}
                        style={{ color: colour }}
                    >
                        {name}
                    </div>
                    <div className="text-sm w-full">{text}</div>
                </div>
                <div className="text-stroke-track-rank font-monumentReg absolute sm:-top-[1rem] -top-[1rem] -left-[1.5rem] -rotate-[30deg] sm:-left-[1.5rem] text-3xl">
                    #{rank}
                </div>
            </div>
            {modalVisibility !== false && (
                <TrackModal
                    modalVisibility={setModalVisibility}
                    visible={true}
                    // setModalDataFunc={() => {
                    //     setModalData();
                    // }}
                />
            )}
        </>
    );
};

export default TrackCard;
