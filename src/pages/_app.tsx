import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ReactGA from 'react-ga';

const trackingID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;

if (trackingID) {
    ReactGA.initialize(trackingID);
} else {
    // Handle the case when the tracking ID is undefined
    console.error('Google Analytics tracking ID is not defined.');
}

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
