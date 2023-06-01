import React from 'react';

const CheckBox = ({ id, label, value, onChange, selectedCheckboxes }) => {
    const isChecked = selectedCheckboxes.includes(value);

    return (
        <>
            <label
                htmlFor={id}
                className="flex cursor-pointer select-none items-center"
            >
                <div className="relative">
                    <input
                        type="checkbox"
                        id={id}
                        className="sr-only"
                        value={value}
                        onChange={onChange}
                        checked={isChecked}
                    />
                    <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border">
                        {isChecked && (
                            <span className="bg-red-500 h-[10px] w-[10px] rounded-sm"></span>
                        )}
                    </div>
                </div>
                {label}
            </label>
        </>
    );
};

export default CheckBox;
