"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AppData from "../../../config/appData.json";
import ApiKeys from "./Developers/ApiKeys";
import WebHooks from "./Developers/WebHooks";
import DeveloperDocs from "./Developers/DeveloperDocs";

const Developers = () => {
  const [currentSideItem, setCurrentSideItem] = useState("1");
  

  const Developers = () => {
    switch (currentSideItem) {
      case 1:
        return <ApiKeys />;
      case 2:
        return <WebHooks />;
      case 3:
        return <DeveloperDocs />;

      default:
        return <ApiKeys />;
    }
  };

  

  return (
    <>
      <div className="flex py-5 overflow-none h-full ">
        <div className="border-r border-black h-screen px-2">
          <ul
            className={` py-10 flex flex-col gap-y-5 text-right text-[#9D9D9D] cursor-pointer`}
          >
            <li
              onClick={() => setCurrentSideItem(1)}
              className={currentSideItem == 1 ? "text-black" : ""}
            >
              Api Keys
            </li>
            <li
              onClick={() => setCurrentSideItem(2)}
              className={currentSideItem == 2 ? "text-black" : ""}
            >
              Webhooks
            </li>
            <li
              onClick={() => setCurrentSideItem(3)}
              className={currentSideItem == 3 ? "text-black" : ""}
            >
              Developer docs
            </li>
          </ul>
        </div>
        <div className="mx-5 mt-2 w-full">{Developers()}</div>
      </div>
    </>
  );
};

export default Developers;
