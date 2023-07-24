"use client";

import Image from "next/image";
import { useState } from "react";
import CardData from "./card/CardData";
import Bank from "./bank/Bank";
import Transfer from "./transfer/Transfer";
import Ussd from "./ussd/Ussd";
import PayAttitude from "./pay-attitude/PayAttitude";
import PayCode from "./pay-code/PayCode";
import QrCode from "./qr-code/QrCode";

const navItems = [
  {
    name: "Card",
    imageSrc: "/card-menu-icon.svg",
    content: <CardData />,
    navItemClass: "icon-dark text-white",
  },
  { name: "Bank", imageSrc: "/bank-menu-icon.svg", content: <Bank /> },
  {
    name: "Transfer",
    imageSrc: "/transfer-menu-icon.svg",
    content: <Transfer />,
  },
  { name: "USSD", imageSrc: "/ussd-menu-icon.svg", content: <Ussd /> },
  {
    name: "PayAttitude",
    imageSrc: "/payattitude-menu-icon.svg",
    content: <PayAttitude />,
  },
  { name: "Paycode", imageSrc: "/spoutpay-logo.svg", content: <PayCode /> },
  { name: "QR Code", imageSrc: "/qr-logo.svg", content: <QrCode /> },
];

const activeNavClass =
  "flex bg-gray-700 border-b-0 border-yellow-300 border-e-8 text-white gap-2 px-2 py-4 block cursor-pointer";

const navClass =
  "flex border-b-2 border-slate-100 gap-2 px-2 py-4 text-dark block cursor-pointer";

// const nav={activeNav ?  : navClass}

export default function Checkout() {
  const [activeNav, setActiveNav] = useState(0);

  const activateNav = (index) => {
    setActiveNav(index);
  };

  return (
    <div className="w-2/4 mt-20 bg-white">
      <nav className="px-6 h-16 bg-darkBlue flex item-center">
        <div className="flex">
          <Image
            src="/spout-logo-dark.svg"
            alt="Spout"
            width={80}
            height={80}
          />
        </div>
      </nav>
      <div className="flex flex-col md:flex-row h-max">
        {/* Sidebar */}
        <div className="w-full md:w-sidebar bg-white uppercase text-xs border-r-2 md:border-e-2 md:border-e-2 text-lightGray">
          <div className="flex flex-col">
            <h1 className="font-bold border-b-2 py-5 px-3 text-darkBlue">
              Select payment method
            </h1>
          </div>
          <ul>
            {navItems.map((nav, i) => (
              <li
                key={i}
                className={i === activeNav ? activeNavClass : navClass}
                onClick={() => activateNav(i)}
              >
                <div className={nav.navItemClass}>
                  <Image
                    src={nav.imageSrc}
                    width={20}
                    height={20}
                    alt={nav.name}
                    // className={i === activeNav ? "icon" : ""}
                  />
                </div>
                {nav.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-auto">
          <div className="flex justify-end align-center text-xs border-b-2 py-5 px-3">
            <div className="">
              <h6>emailaddress@gmail.com</h6>
              <p className="uppercase">pay NGN1000</p>
            </div>
          </div>
          {navItems[activeNav].content}
        </div>
      </div>
    </div>
  );
}
