import React, { ChangeEvent } from 'react';
import Image from 'next/image';

interface InputProps {
    label: string;

    type?: string;
    value: string;
    onChange: (el: string) => void;
}

const InputField = ({
    label,

    type = 'text',
    value,
    onChange,
}: InputProps) => {
    return (
        <>
            <div className="text-sm flex justify-start gap-2 items-center pt-4">
                <p className="font-spaceGrotesk text-white opacity-[0.4]">
                    {label}
                </p>
            </div>
            <div className="flex items-center border-b-2 border-white py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-white px-2 leading-tight focus:outline-none"
                    type={type}
                    value={value}
                    onChange={(el) => {
                        onChange(el.target.value);
                    }}
                    // placeholder={name}
                />
            </div>
        </>
    );
};

export default InputField;