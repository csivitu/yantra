import React from "react";

const EventsCard = () => {
  return (
    <>
      <div className="h-[35vh] w-[80%] bg-yellow-200 flex justify-around py-5 px-4 gap-3 items-center">
        <div className="w-[25%] h-full">photo</div>
        <div className="w-[75%] h-full">
          <div>Name</div>
          <div>time</div>
          <div>desc</div>
        </div>
      </div>
    </>
  );
};

export default EventsCard;
