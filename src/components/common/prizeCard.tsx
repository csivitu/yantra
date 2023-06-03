import React from 'react';
import Image from 'next/image';
const PrizeCard = () => {
    return (
        <>
            <div className=" relative bg-[#252525] bg-opacity-40 text-white font-spaceGrotesk lg:h-[35vh] lg:w-[20vw] h-[25vh] w-[40%] rounded-xl">
                <div className="flex h-full w-full flex-col justify-center items-center gap-3">
                    <div className="text-xl w-full text-center">
                        First prize
                    </div>
                    <div className="text-2xl w-full text-center">
                        First prize
                    </div>
                    <div className="text-xs px-10 w-full text-center">
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrizeCard;
