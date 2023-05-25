import React from 'react';
import ComputerModel from '@/components/three/modelFile';
const three = () => {
    return (
        <>
            <div className="w-[50%] h-screen bg-teal-200">
                <div className="w-full h-1/2 bg-red-600">
                    <ComputerModel />
                </div>
            </div>
        </>
    );
};

export default three;
