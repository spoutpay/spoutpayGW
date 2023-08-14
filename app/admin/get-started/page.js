"use client";
import Dropdown from "@/app/components/Admin/DropdownComponent";
import ProgressBar from "@/app/components/Admin/ProgressBar";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import LineChart from "./Chart";

const GetStarted = () => {
  const options = [{ label: "Option 1", value: "option1" }];
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (option) => {
    setSelectedValue(option.value);
  };
  return (
    <div>
      <div className="w-full bg-white h-20 px-5 flex justify-between items-center my-3">
        <p className="text-lg">Dashboard</p>
        <Dropdown
          options={options}
          onSelect={handleSelect}
          icon={"ep:arrow-down"}
          className={"border border-gray-500 p-3 rounded-sm"}
          title={"Last 30 Days"}
        />
      </div>

      <div className="flex px-5  ">
        <div className="border border-gray-400 rounded-md mx-5  w-7/12 flex justify-between items-center p-3 bg-white">
          <div>
            <div className="flex items-center gap-4">
              <figure className="rounded-full p-3 border border-[#A5A5A5]">
                <Icon icon="grommet-icons:notes" width="20" color="#7C58D1" />
              </figure>
              <p className=" font-bold text-sm">Total Transaction</p>
            </div>
            <p className="text-3xl font-bold my-2">N125.3M</p>
            <div className="flex  mt-6">
              <Icon
                icon="mi:arrow-right-down"
                color="#C90100"
                className="font-bold"
                width="22px"
              />
              <p>
                <span className="text-[#C90100]">0.34% / </span> month
              </p>
              <Icon
                icon="material-symbols:info-outline"
                className="ml-1"
                color="#A5A5A5"
              />
            </div>
          </div>
          <div className=" ">
            <div className="border border-l-black border-r-0 border-t-0 border-b-0 mx-5 "></div>
            <div className="flex items-center gap-4">
              <figure className="rounded-full p-2 border border-[#A5A5A5]">
                <Icon
                  icon="icon-park-solid:success"
                  width="25"
                  color="#16B76B"
                />
              </figure>
              <p className=" font-bold ">Completed Payments</p>
            </div>
            <p className="text-3xl font-bold my-2">N125.3M</p>
            <div className="flex  mt-6">
              <Icon
                icon="mi:arrow-right-down"
                color="#C90100"
                className="font-bold"
                width="22px"
              />
              <p>
                <span className="text-[#C90100]">0.34% / </span> month
              </p>
              <Icon
                icon="material-symbols:info-outline"
                className="ml-1"
                color="#A5A5A5"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <figure className="rounded-full p-2 border border-[#A5A5A5]">
                <Icon icon="mdi:clock-time-seven" color="#f69008" width="24" />
              </figure>
              <p className=" font-bold text-sm">Pending Payments</p>
            </div>
            <p className="text-3xl font-bold my-2">N125.3M</p>
            <div className="flex  mt-6">
              <Icon
                icon="mi:arrow-right-down"
                color="#C90100"
                className="font-bold"
                width="22px"
              />
              <p>
                <span className="text-[#C90100]">0.34% / </span> month
              </p>
              <Icon
                icon="material-symbols:info-outline"
                className="ml-1"
                color="#A5A5A5"
              />
            </div>
          </div>
        </div>
        <div className="w-5/12 border border-gray-400 rounded-md p-3 bg-white">
          <div className=" flex justify-between">
            <h2 className="font-extrabold ">Transaction Activities</h2>
            <ul className="list-disc text-sm opacity-40">
              <li>89% Successful</li>
              <li>11% Processing Error</li>
            </ul>
          </div>
          <div>
            <p className="opacity-40 text-sm">Success Rate</p>
            <ProgressBar width={90} />
            <hr className="mt-3 h-[1px] bg-black" />
          </div>

          <div className=" flex items-center gap-5 text-xs">
            <span>
              <p className="text-[#573CEB] mb-2 "> Payouts</p>
              <p className=" text-lg font-bold">N75M</p>
            </span>
            <span className="border-l border-black px-2">
              <p className="text-[#573CEB] mb-2"> Next Payout</p>
              <p className=" text-lg font-bold">N0:00</p>
            </span>
            <span className="border-l border-[#E6E6E6] px-2 ">
              <p className="text-[#573CEB] mb-1"> Payment Issues</p>
              <ul className="list-disc marker:text-green-[#893704]  flex gap-7 justify-between text-xs w-full">
                <li className="ml-3">
                  <div className="flex flex-col">
                    <p className="">2</p>
                    <p>Customer Errors</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>2</p>
                    <p>Bank Errors</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>2</p>
                    <p>System Errors</p>
                  </div>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>

      <div>
        <LineChart />
      </div>
    </div>
  );
};

export default GetStarted;
