import React from "react";

const Switches = () => {
  return (
    <div>
      <p className="text-[#3483F5] text-lg mt-5">Switch Settings</p>

      <p className="text-[#DD7F00] ">You can only select one at a time</p>

      <div className="flex items-center gap-7 mt-10">
        <button className="border-[1.5px] border-[#000000] bg-[#ADADAD80] flex flex-col w-[10rem] rounded-md p-2">
          {" "}
          <p className="font-semibold">Off</p>{" "}
          <p className="text-xl font-extrabold">UPSL</p>
        </button>
        <button className="border-[1.5px] border-[#075A43] bg-[#E2F4EF] flex flex-col w-[10rem] rounded-md p-2">
          {" "}
          <p className="font-semibold">Off</p>{" "}
          <p className="text-xl font-extrabold">Interswitch</p>
        </button>
      </div>
    </div>
  );
};

export default Switches;
