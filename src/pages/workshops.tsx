import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import WorkshopsList from "@/components/workshops-page-sections/workshopsList";
import React from "react";

const workshops = () => {
  return (
    <>
      <Header />
      <WorkshopsList />
      <Footer />
    </>
  );
};

export default workshops;
