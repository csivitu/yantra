import React from 'react';
import Header from '@/components/common/header';
import SearchHackathonsList from '@/sections/hackathons-page-sections/searchHackathonsList';
import { GetServerSidePropsContext } from 'next';

interface Props {
    search: string;
}

const EventsSearch = ({ search }: Props) => {
    return (
        <>
            <div className="h-max bg-grid-bg bg-repeat-y bg-contain">
                <Header />
                <SearchHackathonsList search={search} />
                {/* <Footer /> */}
            </div>
        </>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query } = context;
    const search = query.search;
    return {
        props: {
            search,
        },
    };
}

export default EventsSearch;
