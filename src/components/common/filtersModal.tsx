import React from 'react';
import CheckBox from './checkBox';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface Props {
    modalVisibility: (visible: boolean) => void;
    visible: boolean;
}

const FiltersModal = ({ modalVisibility, visible }: Props) => {
    // check boxes
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

    const router = useRouter();

    useEffect(() => {
        const type = router.query['type[]'];

        const types = [...new Set(type)];

        setSelectedCheckboxes(types);
    }, []);

    const handleCheckboxChange = (event: {
        target: { value: any; checked: any };
    }) => {
        const { value, checked } = event.target;

        if (checked) {
            setSelectedCheckboxes((prevSelected) => [...prevSelected, value]);
        } else {
            setSelectedCheckboxes((prevSelected) =>
                prevSelected.filter((selectedValue) => selectedValue !== value)
            );
        }
    };

    // modal logic
    const handleOnClose = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        if (target.id === 'modalcontainer') modalVisibility(false);
    };

    const handleSubmit = () => {
        let URL = router.asPath;

        URL = URL.replace(/&type\[\]=\d+/g, '');
        URL = URL.replace(/\?type\[\]=\d+/g, '');

        selectedCheckboxes.forEach((type) => {
            if (URL.split('/')[2]?.startsWith('search?'))
                URL += `&type[]=${type}`;
            else URL = `/events/search?type[]=${type}`;
        });

        router.push(URL);
    };

    const handleClear = () => {
        let URL = router.asPath;

        URL = URL.replace(/&type\[\]=\d+/g, '');
        URL = URL.replace(/\?type\[\]=\d+/g, '');
        if (URL === '/events/search') URL = '/events';
        setSelectedCheckboxes([]);

        router.push(URL);
    };

    if (!visible) return null;
    return (
        <>
            <div
                onClick={handleOnClose}
                id="modalcontainer"
                className="fixed inset-0 bg-black bg-opacity-[0.4] backdrop-blur-sm flex items-center justify-center z-50"
            >
                <div className="h-max font-spaceGrotesk sm:w-[30%] sm:pt-10 pt-10 glassMorphism3 rounded-lg ">
                    <div className="h-[70%]  sm:py-10 py-10 w-full flex gap-3 flex-col sm:flex-row justify-around items-center p-10">
                        <div className="h-full text-lg sm:w-[100%]">
                            <p className="text-4xl font-bold mb-8">
                                Event Type
                            </p>
                            <div className="flex flex-col gap-2">
                                <CheckBox
                                    id="checkboxLabelOne"
                                    label="Workshops"
                                    value="0"
                                    onChange={handleCheckboxChange}
                                    selectedCheckboxes={selectedCheckboxes}
                                />
                                <CheckBox
                                    id="checkboxLabelTwo"
                                    label="Technical Events"
                                    value="1"
                                    onChange={handleCheckboxChange}
                                    selectedCheckboxes={selectedCheckboxes}
                                />
                                <CheckBox
                                    id="checkboxLabelThree"
                                    label="Hackathons"
                                    value="2"
                                    onChange={handleCheckboxChange}
                                    selectedCheckboxes={selectedCheckboxes}
                                />
                                <CheckBox
                                    id="checkboxLabelFour"
                                    label="Ideathon"
                                    value="3"
                                    onChange={handleCheckboxChange}
                                    selectedCheckboxes={selectedCheckboxes}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-[30%] flex justify-center gap-10 p-10 items-center">
                        <button
                            onClick={handleSubmit}
                            className="bg-[#FFA412] font-spaceGrotesk hover:bg-[#ffb744] text-white font-bold text-xl  py-3 px-8 rounded-lg flex justify-center gap-2 items-center"
                        >
                            <p>Apply</p>
                        </button>
                        <button
                            onClick={handleClear}
                            className="bg-[#FFA412] font-spaceGrotesk hover:bg-[#ffb744] text-white font-bold text-xl  py-3 px-8 rounded-lg flex justify-center gap-2 items-center"
                        >
                            <p>Clear</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FiltersModal;
