import React from 'react';
interface Props {
    modalVisibility: (visible: boolean) => void;
    visible: boolean;
}
const TrackModal = ({ modalVisibility, visible }: Props) => {
    const handleOnClose = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.currentTarget.id === 'modalcontainer') modalVisibility(false);
    };
    if (!visible) return null;
    return (
        <>
            <div
                onClick={handleOnClose}
                id="modalcontainer"
                className="fixed inset-0 bg-black bg-opacity-[0.6] backdrop-blur-sm flex items-center justify-center z-50"
            >
                <div className="h-[70vh] w-[80vw] font-spaceGrotesk lg:w-[30%]  glassMorphism3 rounded-lg text-3xl lg:text-3xl flex justify-around items-center flex-col"></div>
            </div>
        </>
    );
};

export default TrackModal;
