import React from 'react';
import Image from 'next/image';

interface Props {
    name: string;
    amount: string;
    text: string;
    iconSource: string;
}
const PrizeCard = ({ name, amount, text, iconSource }: Props) => {
    // const { name, amount, text, iconSource } = el;
    return (
        <>
            <div className=" relative font-spaceGrotesk bg-[#252525] bg-opacity-40 text-white  lg:h-[35vh] lg:w-[20vw] h-[17.5vh] w-[40%] rounded-xl">
                <div className="flex h-full w-full flex-col justify-center items-center gap-1 sm:gap-3">
                    <div className="sm:text-2xl w-full px-3  flex justify-around items-center text-center">
                        {name}
                    </div>
                    <div className="sm:text-3xl w-full text-center drop-shadow-prize-text">
                        ₹{amount}
                    </div>
                    <div className="text-sm px-8 w-full text-center">
                        {text}
                    </div>
                </div>
                <div className="absolute sm:-top-[3.725rem] -top-[1.5rem] -left-[1.5rem]  sm:-left-[3.6125rem]">
                    <Image
                        src={`${iconSource}`}
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

export default PrizeCard;
