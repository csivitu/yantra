import { useState } from 'react';
import Image from 'next/image';
type Option = {
    value: string;
    label: string;
};

type DropdownProps = {
    options: Option[];
    label: string;
};

const Dropdown: React.FC<DropdownProps> = ({ options, label }) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <>
            <div className="text-sm flex justify-start gap-2 items-center pt-4">
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
            <div className="relative">
                <button
                    type="button"
                    className="relative z-10 block w-full py-2 pl-3 pr-10 text-left bg-transparent border-b-2 border-gray-300  shadow-sm cursor-pointer focus:outline-none focus:ring-1  sm:text-sm"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {selectedOption ? selectedOption.label : 'Select a Track'}
                    <svg
                        className={`${
                            isOpen ? '-rotate-180' : 'rotate-0'
                        } absolute inset-y-0 right-0 w-5 h-5 mt-1 mr-3 transition duration-200 ease-in-out text-gray-400`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                {isOpen && (
                    <div className="absolute z-20 mt-2 w-full bg-black border border-gray-300  shadow-lg">
                        <ul className="py-1">
                            {options.map((option) => (
                                <li
                                    key={option.value}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Dropdown;
