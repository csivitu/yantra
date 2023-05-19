import Button from "@/components/common/button";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import EventsSection from "@/components/sections/landing-page-sections/eventsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <EventsSection />
      <Footer />
    </>
  );
}
