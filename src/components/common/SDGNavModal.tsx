import { useRouter } from 'next/router';
import React from 'react';

interface Props {
    modalVisibility: (visible: boolean) => void;
    visible: boolean;
}
const NavModal = ({ modalVisibility, visible }: Props) => {
    // modal logic
    const handleOnClose = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.currentTarget.id === 'modalcontainer') modalVisibility(false);
    };

    const router = useRouter();
    const handleMenuClick = (targetId: string) => {
        console.log(targetId);
        if (
            router.asPath.startsWith('/sdg/team') &&
            targetId !== 'about-section'
        ) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            router.push('/hack/#' + targetId);
        } else if (router.asPath.startsWith('/sdg')) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (
            router.asPath.split('/')[1].startsWith('event') &&
            targetId !== 'events-section'
        )
            router.push(`/#${targetId}`);

        if (router.asPath.split('/')[1].startsWith('team'))
            router.push(`/#${targetId}`);

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const yOffset = 0; // Adjust the yOffset value as per your requirement
            const y =
                targetElement.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    if (!visible) return null;
    return (
        <>
            <div
                onClick={handleOnClose}
                id="modalcontainer"
                className="fixed inset-0 bg-black bg-opacity-[0.6] backdrop-blur-sm flex items-center justify-center z-50"
            >
                <div className="h-[70vh] w-[80vw] font-spaceGrotesk lg:w-[30%]  glassMorphism3 rounded-lg text-3xl lg:text-3xl flex justify-around items-center flex-col">
                    <div
                        className="cursor-pointer w-[80%] h-[10%] text-center flex justify-around items-center hover:text-black text-white"
                        onClick={() => router.push('/hack')}
                    >
                        YANTRA
                    </div>
                    <div
                        className="cursor-pointer w-[60%] h-[10%] text-center flex justify-around items-center hover:text-black text-white"
                        onClick={() => handleMenuClick('aboutSDG-section')}
                    >
                        About
                    </div>

                    <div
                        className="cursor-pointer w-[60%] h-[10%] text-center flex justify-around items-center hover:text-black text-white"
                        onClick={() => handleMenuClick('timeline-section')}
                    >
                        Timeline
                    </div>

                    <div
                        className="cursor-pointer w-[60%] h-[10%] text-center flex justify-around items-center hover:text-black text-white"
                        onClick={() => handleMenuClick('tracks-section')}
                    >
                        Tracks & Prizes
                    </div>
                    <div
                        className="cursor-pointer w-[60%] h-[10%] text-center flex justify-around items-center hover:text-black text-white"
                        onClick={() => handleMenuClick('guidelines-section')}
                    >
                        Guidelines
                    </div>

                    <div
                        className="cursor-pointer w-[60%] h-[10%] text-center flex justify-around items-center hover:text-black text-white"
                        onClick={() => router.push('/team')}
                    >
                        Team
                    </div>

                    <div
                        className="cursor-pointer w-[60%] h-[10%] text-center flex justify-around items-center hover:text-black text-white"
                        onClick={() => handleMenuClick('contact-section')}
                    >
                        Contact Us
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavModal;
