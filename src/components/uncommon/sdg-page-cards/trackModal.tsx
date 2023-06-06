import { useRouter } from 'next/router';
import React from 'react';

interface Props {
    modalVisibility: (visible: boolean) => void;
    visible: boolean;
    statements: string[];
    colour: string;
    name: string;
    rank: string;
}
const TrackModal = ({
    modalVisibility,
    visible,
    statements,
    colour,
    name,
    rank,
}: Props) => {
    const router = useRouter();
    const handleOnClose = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.currentTarget.id === 'modalcontainer') modalVisibility(false);
    };
    if (!visible) return null;
    return (
        <>
            <div
                onClick={handleOnClose}
                id="modalcontainer"
                className=" fixed inset-0 bg-black bg-opacity-[0.6] backdrop-blur-sm flex items-center justify-center z-50"
            >
                <div className="h-[70vh] w-1/2 max-lg:w-5/6 font-spaceGrotesk text-white px-10  glassMorphism rounded-lg text-3xl lg:text-3xl flex justify-center items-start flex-col">
                    <div className="py-3 font-bold" style={{ color: colour }}>
                        Tracks :
                    </div>
                    {statements &&
                        statements.map((el) => {
                            return (
                                <>
                                    <div className="text-base py-1 w-[90%]">
                                        <span style={{ color: colour }}>-</span>{' '}
                                        {el}
                                    </div>
                                </>
                            );
                        })}
                    <div
                        onClick={() => {
                            router.push(`/hack/tracks/${rank}`);
                        }}
                        className="relative w-42 h-12 mt-4 flex items-center justify-center px-5 py-3 overflow-hidden font-bold rounded-full group"
                    >
                        <span className="w-96 h-96 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-56 h-56 -mt-1 transition-all duration-500 ease-in-out -translate-x-96 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                        <span className="font-spaceGrotesk text-lg font-bold flex justify-center items-center  relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900">
                            VIEW MORE
                        </span>
                        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrackModal;
