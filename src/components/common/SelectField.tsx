import React, { ChangeEvent } from 'react';
import Image from 'next/image';

interface SelectProps {
    label: string;
    name: string;
    options: string[];
    value: number;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField = ({
    label,
    name,
    options,
    value,
    onChange,
}: SelectProps) => {
    return (
        <>
            <div className=" text-sm flex justify-start gap-2 items-center pt-4">
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
            <div className="cursor-pointer flex items-center border-b-2 border-white py-2">
                <select
                    className="cursor-pointer appearance-none bg-transparent border-none w-full text-white  px-2 leading-tight focus:outline-none"
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    {options.map((option) => (
                        <option
                            className="bg-black cursor-pointer"
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default SelectField;
