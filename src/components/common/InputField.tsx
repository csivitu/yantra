import React from 'react';
import Image from 'next/image';
interface InputProps {
    label: string;
    name: string;
    type?: string;
}
const Input = ({ label, name, type = 'text', ...rest }: InputProps) => {
    return (
        <>
            <div className="text-sm flex justify-start gap-2 items-center pt-4 ">
                <p className="font-spaceGrotesk text-white opacity-[0.4]">
                    {label}
                </p>
                <div>
                    <Image
                        src="/edit-button.svg"
                        alt="Logo"
                        height={1000000}
                        width={100000}
                        className="w-4 h-4 object-contain cursor-pointer"
                    />
                </div>
            </div>
            <div className="flex items-center border-b-2 border-white py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-white   px-2 leading-tight focus:outline-none"
                    type={type}
                    placeholder=""
                />
            </div>
        </>
    );
};

export default Input;
