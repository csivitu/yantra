import React from 'react';
import CheckBox from './checkBox';
import { useState } from 'react';
const FiltersModal = ({ modalVisibility, visible }) => {
    // check boxes
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const handleCheckboxChange = (event) => {
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
    const handleOnClose = (el) => {
        if (el.target.id === 'modalcontainer') modalVisibility(false);
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
                            <p className="text-3xl">Event Type</p>
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
                    <div className="h-[30%] flex justify-center gap-10 p-10 items-center">
                        <button className="bg-[#FFA412] font-spaceGrotesk hover:bg-[#ffb744] text-white font-bold text-xl  py-3 px-8 rounded-lg flex justify-center gap-2 items-center">
                            <p>Apply</p>
                        </button>
                        <button className="bg-[#FFA412] font-spaceGrotesk hover:bg-[#ffb744] text-white font-bold text-xl  py-3 px-8 rounded-lg flex justify-center gap-2 items-center">
                            <p>Clear</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FiltersModal;
