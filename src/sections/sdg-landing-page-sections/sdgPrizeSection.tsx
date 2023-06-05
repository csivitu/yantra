import React from 'react';
import Image from 'next/image';
import PrizeCard from '@/components/uncommon/sdg-page-cards/prizeCard';
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
            text: 'A jackpot for the coding maestros! Strum the strings of innovation and step up on the podium.',
            iconSource: '/gold-trophy.png',
        },
        {
            name: 'SECOND PRIZE',
            amount: '80,000',
            text: 'The silver lining in the cloud of code! Unleash your creativity and rise to the occasion.',
            iconSource: '/silver-trophy.png',
        },
        {
            name: 'THIRD PRIZE',
            amount: '60,000',
            text: 'Bronze but brilliant! Fuel your coding journey and claim your spot on the podium.',
            iconSource: '/bronze-trophy.png',
        },
    ];
    const prizesRow2 = [
        {
            name: 'TRACK WINNERS',
            amount: '35,000',
            text: 'Master of your track! Conquer the challenges and shine in your chosen SDG Goal.',
            iconSource: '/medal.png',
        },
        {
            name: 'BEST UI/UX',
            amount: '15,000',
            text: 'A feast for the eyes! Craft the slickest user journey and dazzle the competition.',
            iconSource: '/medal.png',
        },
        {
            name: 'BEST IMPLEMENTATION',
            amount: '15,000',
            text: 'Make it work, make it wow! Perfect your code execution and stand out from the crowd.',
            iconSource: '/medal.png',
        },
    ];
    return (
        <>
            <div className="w-full mt-20 max-md:text-4xl h-[20vh] flex justify-around items-center text-white font-bronson uppercase text-5xl font-extrabold m-auto text-center">
                WIN CASH PRIZES WORTH
            </div>
            <div className="w-full flex justify-around items-center sm:pb-24 lg:pb-10 px-32 max-lg:px-8">
                <Image
                    src="/slotmachine.png"
                    alt="photo"
                    height={1000000}
                    width={1000000}
                    className="lg:w-[60vw] lg:h-[50vh] h-[30vh] w-[100%] object-contain "
                />
            </div>
            <div className="w-full py-10 lg:py-10 lg:px-24 gap-y-12 lg:gap-y-14 flex flex-col justify-center items-center">
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
