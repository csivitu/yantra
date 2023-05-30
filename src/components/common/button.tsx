import React from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';
import envHandler from '@/managers/envHandler';

const Button = () => {
    const onClickHandler = () => {
        ReactGA.event({
            category: 'login-btn',
            action: 'test action',
            label: 'test label',
            value: 1234,
        });
    };
    return (
        <div
            onClick={() => {
                onClickHandler();
            }}
        >
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Poogle
            </button>
        </div>
    );
};

export default Button;
