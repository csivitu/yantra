import Footer from "@/components/common/footer";
import HackathonsList from "@/components/common/hackathons-page-sections/hackathonsList";
import Header from "@/components/common/header";
import React from "react";

const hackathons = () => {
  return (
    <>
      <Header />
      <HackathonsList />
      <Footer />
    </>
  );
};

export default hackathons;
