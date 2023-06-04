import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import FiltersModal from './filtersModal';

interface Props {
    initialSearch: string;
}

const SearchBar = ({ initialSearch }: Props) => {
    const [search, setSearch] = useState(initialSearch);
    const router = useRouter();

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (search === '') router.push('/events');
        else router.push(`/events/search?key=${search}`);
    };

    const handleSearchButtonClick = () => {
        if (search === '') router.push('/events');
        else router.push(`/events/search?key=${search}`);
    };

    const [modalVisibility, setModalVisibility] = useState(false);

    return (
        <>
            <div className="flex flex-row justify-end gap-3 items-center w-full">
                <div className="sm:w-[75%] h-12 w-full  top-2 glassMorphism flex items-center justify-between rounded-[3rem] py-2 my-2  ">
                    <form onSubmit={handleFormSubmit} className="w-full h-full">
                        <input
                            className="sm:mx-8 w-full h-full sm:text-2xl max-md:px-4 bg-[#e3e3e300] text-white font-spaceGrotesk focus:outline-none max-sm:text-base "
                            placeholder="looking for something?"
                            maxLength={45}
                            value={search}
                            onChange={(el) => {
                                setSearch(el.target.value);
                            }}
                        />
                    </form>
                    <div className="w-fit flex justify-center items-center gap-4">
                        <div
                            className="w-12 h-8 mr-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in-out duration-200"
                            onClick={handleSearchButtonClick}
                        >
                            <Image
                                className="w-1/2"
                                width={10000}
                                height={10000}
                                alt="search"
                                src={'/search.png'}
                            />
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => {
                        setModalVisibility(true);
                    }}
                    className=" text-white font-bold hover:scale-110 transition-all ease-in-out  rounded-lg flex justify-center w-7 h-7 items-center"
                >
                    <Image
                        width={10000}
                        height={10000}
                        src={`/whiteFilter.png`}
                        alt="/"
                        className="w-8 h-8  object-contain z-50 cursor-pointer"
                    />
                </button>
                {modalVisibility !== false && (
                    <FiltersModal
                        modalVisibility={setModalVisibility}
                        visible={true}
                        // setModalDataFunc={() => {
                        //     setModalData();
                        // }}
                    />
                )}
            </div>
        </>
    );
};

export default SearchBar;
