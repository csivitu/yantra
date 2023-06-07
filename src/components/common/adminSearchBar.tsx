import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { TeamDocument } from '@/models/teamModel';

interface Props {
    teams: TeamDocument[];
    setTeams: (teams: TeamDocument[]) => void;
    initialTeams: TeamDocument[];
}

const AdminSearchBar = ({ teams, setTeams, initialTeams }: Props) => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newSearch = event.target.value;

        setSearch(newSearch);
        filterTeams(newSearch);
    };

    const filterTeams = (newSearch: string) => {
        const newTeams = initialTeams.filter((team) =>
            team.title.toLowerCase().includes(newSearch.toLowerCase())
        );
        console.log(newTeams);
        setTeams(newTeams);
    };

    return (
        <>
            <div className="flex flex-row justify-end gap-3 items-center w-full">
                <div className="sm:w-[75%] h-12 w-full  top-2 glassMorphism flex items-center justify-between rounded-[3rem] py-2 my-2  ">
                    <input
                        className="sm:mx-8 w-full h-full sm:text-2xl max-md:px-4 bg-[#e3e3e300] text-white font-spaceGrotesk focus:outline-none max-sm:text-base "
                        placeholder="search for teams here"
                        maxLength={20}
                        value={search}
                        onChange={handleChange}
                    />

                    <div className="w-fit flex justify-center items-center gap-4">
                        <div className="w-12 h-8 mr-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in-out duration-200">
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
            </div>
        </>
    );
};

export default AdminSearchBar;
