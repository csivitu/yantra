import React from 'react';
import Image from 'next/image';

type PatronsCardProps = {
    name: string;
    position: string;
    photo: string;
};

const PatronsCard: React.FC<PatronsCardProps> = ({ name, position, photo }) => {
    return (
        <div className="text-blue relative font-spaceGrotesk lg:h-[45vh] lg:w-[20vw] h-[25vh] w-[40%] sm:h-[25vh] sm:w-[25vw] rounded-xl">
            <Image
                src={`/${photo}`}
                alt={name}
                className="w-full h-full object-cover rounded-xl"
                width={10000}
                height={10000}
            />
            <div className="absolute bottom-0 text-white">
                <div>{name}</div>
                <div>{position}</div>
            </div>
        </div>
    );
};

export default PatronsCard;
