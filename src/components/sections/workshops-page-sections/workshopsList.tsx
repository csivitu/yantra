import React from "react";
import EventsCard from "../../uncommon/landing-page-cards/eventsCard";
const WorkshopsList = () => {
  return (
    <>
      <div className="w-full h-max bg-slate-200 ">
        <div className="text-4xl font-bold h-[15vh] flex justify-around items-center">
          Workshops / Technical Workshops
        </div>
        <div className="flex justify-center gap-3 items-center">
          <div className="w-[20%] flex justify-around items-center">
            Technical Workshops
          </div>
          <div className="w-[20%] flex justify-around items-center">
            Non- technical Workshops
          </div>
          <div className="w-[20%] flex justify-around items-center">Events</div>
        </div>
        <div className="flex justify-around items-center flex-col py-10 gap-5">
          <EventsCard />
          <EventsCard />
          <EventsCard />
        </div>
      </div>
    </>
  );
};

export default WorkshopsList;
