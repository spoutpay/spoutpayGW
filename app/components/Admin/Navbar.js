"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { useRouter, useParams, usePathname } from "next/navigation";
import Dropdown from "./DropdownComponent";
import { Icon } from "@iconify/react";

const Navbar = ({ onMenuButtonClick }) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  const options = [{ label: "Option 1", value: "option1" }];

  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (option) => {
    setSelectedValue(option.value);
  };

  const Title = () => {
    switch (pathname) {
      case "/admin/get-started":
        return "Overview";
      case "/admin/transaction":
        return "Transaction";
      case "/admin/refunds":
        return "Refunds";
      case "/admin/disputes":
        return "Dispute";
      case "/admin/charge-back":
        return "Charge Back";
      case "/admin/settings":
        return "Settings";
      case "/payment-pages":
        return "Payment Pages";
      default:
        "";
    }
  };
  return (
    <nav
      className={classNames({
        "bg-white text-zinc-500": true, // colors
        "flex gap-[9rem]  items-center": true, // layout
        "w-full fixed z-10 p-4 px-10 h-20 shadow-sm  mb-5": true, //positioning & styling
      })}
    >
      <div className="">
        <Image
          src="/spoutpay-logo.svg"
          alt="Spout Pay Logo "
          className=""
          width={100}
          height={50}
          onChange={() => router.push("/admin")}
        />

        <p className="mt-0 p-0 text-sm"> ADMIN</p>
      </div>
      <div className="flex w-full items-center justify-between">
        <div>
          <p className="">{Title()}</p>
        </div>
        <div className="flex  items-center gap-2 ">
          <Icon icon="mdi:bell-notification-outline" width="25" />
          <Dropdown
            options={options}
            onSelect={handleSelect}
            icon={"bxs:down-arrow"}
            className={"bg-[#F4F5F7] p-3 border-none rounded-md"}
            title={
              <div className="flex gap-2 items-center">
                <p className="rounded-full p-1 text-white bg-blue-700">SS</p>
                <span className="flex flex-col items-start">
                  <p className="text-xs items-start font-bold">Sanusi Segun</p>
                  <p className="text-xs">sanusi@spoutpayment.com</p>
                </span>
              </div>
            }
          />
        </div>
      </div>
      <button className="md:hidden" onClick={onMenuButtonClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  );
};

const options = [{}];
export default Navbar;
