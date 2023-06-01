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
        if (
            router.asPath.split('/')[1] === 'events' &&
            targetId !== 'events-section'
        )
            router.push('/');
        modalVisibility(false);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const yOffset = 0; // Adjust the yOffset value as per your requirement
            const y =
                targetElement.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            modalVisibility(false);
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
                <div className="h-[70vh] w-[60vw] font-spaceGrotesk lg:w-[30%] sm:pt-10 pt-10 glassMorphism3 rounded-lg text-2xl lg:text-3xl flex justify-around items-center flex-col">
                    <div
                        className="cursor-pointer hover:text-black text-white"
                        onClick={() => handleMenuClick('about-section')}
                    >
                        About Us
                    </div>

                    <div
                        className="cursor-pointer hover:text-black text-white"
                        onClick={() => handleMenuClick('timeline-section')}
                    >
                        Timeline
                    </div>
                    <div
                        className="cursor-pointer hover:text-black text-white"
                        onClick={() => handleMenuClick('events-section')}
                    >
                        Events
                    </div>
                    <div
                        className="cursor-pointer hover:text-black text-white"
                        onClick={() => handleMenuClick('patrons-section')}
                    >
                        Patrons
                    </div>

                    <div
                        className="cursor-pointer hover:text-black text-white"
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
