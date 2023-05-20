import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from './button';
import { getCookie } from 'cookies-next';
import { GetServerSidePropsContext } from 'next';

const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = getCookie('token');
        if (token) setIsAuthenticated(true);
    }, []);

    return (
        <>
            <div className="flex justify-around items-center w-full h-[7.5vh] fixed top-0">
                <div className="w-[20%] h-full p-1">
                    <Image
                        src="/assets/vit-logo.png"
                        alt="logo"
                        height={10000}
                        width={10000}
                        className="h-full object-contain"
                    />
                </div>
                <div className="w-[80%] h-full flex justify-end items-center">
                    <div className="w-[10%]">About Us</div>
                    <div className="w-[10%]">Workshops</div>
                    <div className="w-[10%]">Hackathons</div>
                    <div className="w-[10%]">Team</div>
                    <div className="w-[10%]">
                        {isAuthenticated ? '' : <Button />}
                    </div>
                </div>
            </div>
        </>
    );
};

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//     const token = getCookie('token');

//     if (token) {
//         return {
//             props: { isAuthenticated: true },
//         };
//     } else {
//         return {
//             props: { isAuthenticated: false },
//         };
//     }
// }

export default Header;
