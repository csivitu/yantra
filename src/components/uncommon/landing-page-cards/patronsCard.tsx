import React from 'react';
import Image from 'next/image';

type PatronsCardProps = {
    name: string;
    position: string;
    photo: string;
};

const PatronsCard: React.FC<PatronsCardProps> = ({ name, position, photo }) => {
    return (
        <div className=" relative font-spaceGrotesk lg:h-[45vh] lg:w-[20vw] h-[25vh] w-[40%] rounded-xl">
            <div className="absolute top-0 w-full h-full overlay z-10 rounded-xl"></div>
            <Image
                src={`/${photo}`}
                alt={name}
                className="w-full h-full object-cover rounded-xl"
                width={10000}
                height={10000}
            />

            <div className="absolute p-2 bottom-0 text-white z-50">
                <div
                    className={`font-semibold ${
                        position === ''
                            ? 'text-2xl max-md:text-xl max-sm:text-lg'
                            : 'text-lg'
                    }`}
                >
                    {name}
                </div>
                <div className="text-xs">{position}</div>
            </div>
        </div>
    );
};

export default PatronsCard;
