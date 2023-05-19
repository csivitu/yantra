import EventsCard from "@/components/uncommon/landing-page-cards/eventsCard";
import React from "react";

const EventsSection = () => {
  return (
    <>
      <div className="h-[10vh] flex justify-around items-center text-4xl">
        EVENTS
      </div>
      <div className="w-full h-max bg-slate-500 ">
        <div>
          <div className="text-2xl h-[10vh] flex justify-around items-center">
            EVENTs
          </div>
          <div className="flex justify-around items-center flex-col py-10 gap-5">
            <EventsCard />
            <EventsCard />
            <EventsCard />
          </div>
        </div>
        <div>
          <div className="text-2xl   h-[10vh] flex justify-around items-center">
            Hacks
          </div>
          <div className="flex justify-around items-center flex-col py-10 gap-5">
            <EventsCard />
            <EventsCard />
            <EventsCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsSection;
