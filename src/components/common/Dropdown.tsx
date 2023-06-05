import React, { useState } from 'react';
import Image from 'next/image';
type DropdownProps = {
    items: string[];
    onChange: (selectedItem: string) => void;
    label: string;
};

const Dropdown: React.FC<DropdownProps> = ({ items, onChange, label }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item: string) => {
        onChange(item);
        setSelectedItem(item);
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
            <div className="relative w-full font-spaceGrotesk cursor-pointer inline-block">
                <div
                    className="w-full py-2 text-sm font-medium text-white bg-transparent border-b-2 border-white  shadow-sm focus:outline-none "
                    onClick={toggleDropdown}
                >
                    {selectedItem || 'Select an option'}
                </div>
                {isOpen && (
                    <div className="absolute w-full bg-black right-0 z-10 mt-2 overflow-auto  border border-gray-300 rounded-md shadow-lg max-h-60">
                        {items.map((item) => (
                            <button
                                key={item}
                                className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-100 "
                                onClick={() => handleItemClick(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Dropdown;
