import React from 'react';
import Image from 'next/image';
const PrizeCard = () => {
    return (
        <>
            <div className=" relative font-spaceGrotesk bg-[#252525] bg-opacity-40 text-white  lg:h-[35vh] lg:w-[20vw] h-[25vh] w-[40%] rounded-xl">
                <div className="flex h-full w-full flex-col justify-center items-center gap-3">
                    <div className="text-3xl w-full text-center">
                        First prize
                    </div>
                    <div className="text-3xl w-full text-center drop-shadow-prize-text">
                        Sect :)
                    </div>
                    <div className="text-sm px-8 w-full text-center">
                        Lorem ipsum dolor sit amet consectetur
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

export default PrizeCard;
