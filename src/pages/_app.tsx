import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth/core/types';

interface AppPropsWithSession extends AppProps {
    session: Session;
} // if not then add the session manually from types

export default function App({
    Component,
    pageProps,
    session,
}: AppPropsWithSession) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
