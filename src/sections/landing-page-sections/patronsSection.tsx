import PatronsCard from "@/components/uncommon/landing-page-cards/patronsCard";
import React from "react";

const PatronsSection = () => {
  return (
    <>
      <div className="h-[15vh] text-4xl text-center flex justify-around items-center">
        PATRONS
      </div>
      <div className="h-max py-10 bg-red-300 flex justify-evenly gap-4 gap-y-10  items-center flex-wrap">
        <PatronsCard />
        <PatronsCard />
        <PatronsCard />
        <PatronsCard />
        <PatronsCard />
      </div>
    </>
  );
};

export default PatronsSection;
