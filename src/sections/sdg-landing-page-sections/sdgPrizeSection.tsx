import React from 'react';
import Image from 'next/image';
import PrizeCard from '@/components/common/prizeCard';

const SDGPriceSection = () => {
    return (
        <>
            <div className="w-full mt-20 max-md:text-4xl h-[20vh] flex justify-around items-center text-white font-bronson uppercase text-5xl font-extrabold m-auto text-center">
                WIN CASH PRIZES WORTH
            </div>
            <div className="w-full flex justify-around items-center pb-10 px-32">
                <Image
                    src="/slotmachine.png"
                    alt="photo"
                    height={1000000}
                    width={1000000}
                    className="lg:w-[60vw] lg:h-[50vh] h-[30vh] w-[100%] object-contain "
                />
            </div>
            <div className="w-full  py-10 px-32">
                <div>
                    <PrizeCard />
                </div>
                <div>asd</div>
            </div>
        </>
    );
};

export default SDGPriceSection;
