import React from 'react';
import Image from 'next/image';

interface InputProps {
    label: string;
    value: string;
    onChange: (el: string) => void;
}

const InputTextField = ({ label, value, onChange }: InputProps) => {
    return (
        <>
            <div className="text-sm flex justify-start gap-2 items-center pt-4">
                <div className="w-full flex justify-between">
                    <div className="font-spaceGrotesk text-white opacity-[0.4] flex gap-2">
                        <div>{label}</div>
                        <Image
                            src="/edit-button.svg"
                            alt="Logo"
                            height={1000000}
                            width={100000}
                            className="w-4 h-4 object-contain cursor-pointer"
                        />
                    </div>
                    <div className="opacity-40">({value.length}/500)</div>
                </div>
            </div>
            <div className="flex items-center border-b-2 border-white py-2">
                <textarea
                    className="appearance-none rounded-lg p-3 max-h-[25vh] min-h-[15vh] bg-[#2828287e] border-none w-full text-white leading-tight focus:outline-none"
                    value={value}
                    onChange={(el) => {
                        onChange(el.target.value.slice(0, 500));
                    }}
                    placeholder={'Brief Us About your Idea'}
                />
            </div>
        </>
    );
};

export default InputTextField;
