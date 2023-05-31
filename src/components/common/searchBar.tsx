import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const SearchBar = () => {
    const [search, setSearch] = useState();
    const router = useRouter();
    const submitHandler = (el: FormEvent<HTMLFormElement>) => {
        el.preventDefault();
        if (search === '') router.push('/explore');
        else router.push(`/explore/search?search=${search}`);
    };
    return (
        <div className="w-5/6 h-12 sticky top-2 z-50 glassMorphism flex items-center justify-between rounded-[3rem] py-2 my-2 max-md:w-3/4">
            <form onSubmit={submitHandler} className="w-full h-full">
                <input
                    className="mx-8 w-full h-full text-2xl bg-[#e3e3e300] text-white font-spaceGrotesk focus:outline-none max-sm:text-xl"
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
    );
};

export default SearchBar;
