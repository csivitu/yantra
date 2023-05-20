import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import EventsSection from '@/components/sections/landing-page-sections/eventsSection';
import PatronsSection from '@/components/sections/landing-page-sections/patronsSection';
import TimelineSection from '@/components/sections/landing-page-sections/timelineSection';

export default function Home() {
    return (
        <>
            <Header />
            <EventsSection />
            <TimelineSection />
            <PatronsSection />
            <Footer />
        </>
    );
}
