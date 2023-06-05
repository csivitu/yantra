import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { DefaultSession } from 'next-auth';

interface AppPropsWithSession extends AppProps {
    session: Session;
}

interface Session {
    user: {} & DefaultSession['user'];
    expires: string;
}

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
