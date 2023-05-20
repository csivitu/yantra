import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
const Google = ({ token }) => {
    const router = useRouter();
    useEffect(() => {
        Cookies.set('token', token);
        router.push({
            pathname: '/',
            query: {
                redirect: true,
            },
        });
    }, []);

    return <></>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { token } = context.query;
    return {
        props: { token },
    };
}

export default Google;
