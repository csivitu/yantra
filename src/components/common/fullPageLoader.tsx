import React, { useState, useEffect } from 'react';

interface Props {
    loading: boolean;
}

const FullPageLoader = ({ loading }: Props) => {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    useEffect(() => {
        if (filled < 100 && isRunning) {
            setTimeout(() => setFilled((prev) => (prev += 2)), 8);
        }
    }, [filled, isRunning]);

    return (
        <div
            className={`w-screen font-bronson flex flex-col items-center justify-center gap-4 h-screen overflow-hidden fixed bg-black transition-all duration-500 ease-in-out text-white ${
                loading ? 'opacity-100 z-[120]' : 'opacity-0 -z-[120]'
            }`}
        >
            <div className="progressbar">
                <div
                    style={{
                        height: '100%',
                        width: `${filled}%`,
                        backgroundColor: '#7eff6a',
                        transition: 'width 0.5s',
                    }}
                ></div>
                <span className="progressPercent text-base text-center">
                    {filled}%
                </span>
            </div>
            <div className="text-4xl max-lg:text-3xl">Loading assets...</div>
        </div>
    );
};

export default FullPageLoader;
