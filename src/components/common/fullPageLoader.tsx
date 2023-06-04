import React from 'react';

interface Props {
    loading: boolean;
}

const FullPageLoader = ({ loading }: Props) => {
    return (
        <div
            className={`w-screen text-9xl font-bronson flex items-center justify-center h-screen overflow-hidden fixed bg-black transition-all duration-500 ease-in-out text-white ${
                loading ? 'opacity-100 z-[120]' : 'opacity-0 -z-[120]'
            }`}
        >
            Loading...
        </div>
    );
};

export default FullPageLoader;
