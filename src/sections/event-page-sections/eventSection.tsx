import React from 'react';
import Image from 'next/image';
import Back from '@/components/common/back';
import { useRouter } from 'next/router';
const EventSection = () => {
    const router = useRouter();
    return (
        <>
            <div className="h-max flex lg:flex-row flex-col-reverse text-white font-spaceGrotesk justify-around items-center px-20 py-4">
                <div className="h-full lg:w-1/2 ">
                    <div className=" h-[7.5vh] flex justify-start gap-2 items-center  ">
                        <div
                            onClick={() => router.push('/events')}
                            className="flex justify-start gap-2 items-center cursor-pointer"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="cursor-pointer"
                                onClick={() => router.push('/events')}
                            >
                                <path
                                    d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <div
                                onClick={() => router.push('/events')}
                                className="cursor-pointer"
                            ></div>
                            Back
                        </div>
                    </div>{' '}
                    <div className="h-[7.5vh] text-5xl text-white font-bronson">
                        HACKSTORY
                    </div>
                    <div className="h-[5vh] text-sm  font-spaceGrotesk text-[#FFA412]">
                        COMPUTER SOCIETY OF INDIA | BULLS AND BEARS | DEBSOC
                    </div>
                    <div className="h-max">
                        <div className="text-xs font-spaceGrotesk text-white opacity-[0.4]">
                            FROM
                        </div>
                        <div className="text-xl font-spaceGrotesk">
                            12 June <span className="text-[#FFA412]">|</span> 12
                            PM
                        </div>
                    </div>
                    <div className="h-max">
                        <div className="text-xs font-spaceGrotesk text-white opacity-[0.4]">
                            FROM
                        </div>
                        <div className="font-spaceGrotesk text-xl">
                            12 June <span className="text-[#FFA412]">|</span> 12
                            PM
                        </div>
                    </div>
                    <div className="h-max">
                        <div className="text-xs font-spaceGrotesk text-white opacity-[0.4]">
                            VENUE
                        </div>
                        <div className="font-spaceGrotesk text-xl">
                            Anna Auditorium
                        </div>
                        <br />
                    </div>
                    <div className="h-[30vh]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Enim nesciunt doloremque quo labore asperiores
                        ratione ipsum! Qui perferendis et eum, mollitia
                        asperiores impedit, voluptatum, exercitationem
                        reiciendis laboriosam recusandae maxime omnis.
                    </div>
                    <div className="h-[5vh]  flex justify-start gap-2">
                        <Image
                            src={'/link.svg'}
                            alt="photo"
                            height={10000}
                            width={10000}
                            className="w-6 h-6 object-contain"
                        />
                        <div>Link here</div>
                    </div>
                </div>
                <div className="h-full lg:w-1/2 flex justify-around items-center">
                    <Image
                        src={'/vit.png'}
                        alt="photo"
                        height={10000}
                        width={10000}
                        className="lg:w-[60vh] lg:h-[60vh]  object-cover rounded-xl"
                    />
                </div>
            </div>
        </>
    );
};

export default EventSection;
