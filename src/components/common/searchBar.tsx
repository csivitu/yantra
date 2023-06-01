import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import FiltersModal from './filtersModal';

const SearchBar = () => {
    const [search, setSearch] = useState();
    const router = useRouter();
    const submitHandler = (el: FormEvent<HTMLFormElement>) => {
        el.preventDefault();
        if (search === '') router.push('/explore');
        else router.push(`/events/search?search=${search}`);
    };

    // modal logic
    const [modalVisibility, setModalVisibility] = useState(false);
    const [modalData, setModalData] = useState([]);
    // const handleModalOnClose = () => {
    //     setModalVisibility(false);
    // };

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-around items-center w-full">
                <div className="sm:w-[75%] h-12 w-full top-2 glassMorphism flex items-center justify-between rounded-[3rem] py-2 my-2 ">
                    <form onSubmit={submitHandler} className="w-full h-full">
                        <input
                            className="sm:mx-8 w-full h-full sm:text-2xl bg-[#e3e3e300] text-white font-spaceGrotesk focus:outline-none max-sm:text-base text-center"
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
                            onClick={submitHandler}
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
                    className="bg-[#FFA412] hover:bg-[#ffb744] text-white font-bold  rounded-lg flex justify-center gap-2 px-3 py-1 items-center"
                >
                    <p className="text-xl font-spaceGrotesk">Filters</p>
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
