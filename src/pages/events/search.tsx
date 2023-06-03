import React, { useEffect } from 'react';
import Header from '@/components/common/header';
import SearchHackathonsList from '@/sections/hackathons-page-sections/searchHackathonsList';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

interface Props {
    search: string;
    type: [string];
}

const EventsSearch = ({ search, type }: Props) => {
    return (
        <>
            <div className="h-max ">
                <Head>
                    <title>Yantra | Search</title>
                </Head>
                <Header />
                <SearchHackathonsList search={search} type={type} />
                {/* <Footer /> */}
            </div>
        </>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query } = context;
    const key: string = (query.key as string) || '';
    let type: string | string[] = query['type[]'] || ['0', '1', '2', '3'];

    if (typeof type === 'string') {
        type = [type];
    }

    return {
        props: {
            search: key,
            type,
        },
    };
}

export default EventsSearch;
