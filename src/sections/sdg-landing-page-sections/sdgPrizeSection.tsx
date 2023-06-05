import React from 'react';
import Image from 'next/image';
import PrizeCard from '@/components/common/prizeCard';
interface Props {
    name: string;
    amount: string;
    text: string;
    iconSource: string;
}
const SDGPriceSection = () => {
    const prizesRow1 = [
        {
            name: 'FIRST PRIZE',
            amount: '1,20,000',
            text: 'text',
            iconSource: '/gold-trophy.png',
        },
        {
            name: 'SECOND PRIZE',
            amount: '80,000',
            text: 'text',
            iconSource: '/silver-trophy.png',
        },
        {
            name: 'THIRD PRIZE',
            amount: '60,000',
            text: 'text',
            iconSource: '/bronze-trophy.png',
        },
    ];
    const prizesRow2 = [
        {
            name: 'TRACK WINNERS',
            amount: '1,20,000 / 7',
            text: 'text',
            iconSource: '/medal.png',
        },
        {
            name: 'BEST UI/UX',
            amount: '80,000',
            text: 'text',
            iconSource: '/medal.png',
        },
        {
            name: 'BEST IMPLEMENTATION',
            amount: '60,000',
            text: 'text',
            iconSource: '/medal.png',
        },
    ];
    return (
        <>
            <div className="w-full mt-20 max-md:text-4xl h-[20vh] flex justify-around items-center text-white font-bronson uppercase text-5xl font-extrabold m-auto text-center">
                WIN CASH PRIZES WORTH
            </div>
            <div className="w-full flex justify-around items-center pb-10 px-32 max-lg:px-8">
                <Image
                    src="/slotmachine.png"
                    alt="photo"
                    height={1000000}
                    width={1000000}
                    className="lg:w-[60vw] lg:h-[50vh] h-[30vh] w-[100%] object-contain "
                />
            </div>
            <div className="w-full lg:py-10 lg:px-24 gap-y-10 lg:gap-y-14 flex flex-col justify-center items-center">
                <div className="w-full flex justify-center items-center flex-wrap gap-y-8 sm:gap-y-16 lg:gap-y-20 gap-x-8 lg:gap-x-20">
                    {prizesRow1 &&
                        prizesRow1.map((el, index) => {
                            return (
                                <PrizeCard
                                    key={index}
                                    name={el.name}
                                    amount={el.amount}
                                    text={el.text}
                                    iconSource={el.iconSource}
                                />
                            );
                        })}
                </div>
                <div className="w-full flex justify-center items-center flex-wrap gap-y-8 sm:gap-y-16 lg:gap-y-20 gap-x-8 lg:gap-x-20">
                    {prizesRow2 &&
                        prizesRow2.map((el, index) => {
                            return (
                                <PrizeCard
                                    key={index}
                                    name={el.name}
                                    amount={el.amount}
                                    text={el.text}
                                    iconSource={el.iconSource}
                                />
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default SDGPriceSection;
