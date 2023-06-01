import React from 'react';
import { PulseLoader } from 'react-spinners';
const Loader = () => {
    return (
        <div className="h-full w-full">
            <PulseLoader color="#F8924F" />
        </div>
    );
};

export default Loader;
