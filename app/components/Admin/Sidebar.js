import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useClickAway } from "@uidotdev/usehooks";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

const Sidebar = ({ open, setOpen }) => {
  const currentRoute = usePathname();
  const ref = useRef(null);
  useClickAway(ref, (e) => {
    setOpen(false);
  });
  return (
    <div
      className={classNames({
        "flex flex-col justify-between text-hoss": true, // layout
        "bg-[#060D27] ": true, // colors
        "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true, // positioning
        "h-full w-[300px]": true, // for height and width
        "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
        "-translate-x-full ": !open, //hide sidebar to the left when closed
      })}
      ref={ref}
    >
      <nav className="md:sticky top-0 md:top-16">
        {/* nav items */}
        <ul className=" pl-5 flex flex-col gap-2 gap-y-2 mt-10">
          {navItems.map((item, index) => {
            return (
              <>
                <Link
                  href={`${BASE_URL}${item.href}`}
                  className={
                    currentRoute === `${BASE_URL}${item.href}`
                      ? "text-[#EFEF2E]"
                      : "text-white"
                  }
                >
                  <li
                    key={index}
                    className={classNames({
                      "": true, //colors
                      "flex gap-4 items-center ": true, //layout
                      "transition-colors duration-300": true, //animation
                      "rounded-md px-2 mx-2 text-xs ": true, //self style
                    })}
                  >
                    <Icon icon={item.icon} />
                    {item.label}
                  </li>
                </Link>
                <li className="px-2 mx-2 opacity-60 text-xs">{item.text}</li>
              </>
            );
          })}
        </ul>
      </nav>
      {/* account  */}
      <div className="">
        <ul className=" pl-5 flex flex-col gap-2 gap-y-2 mt-16 mb-8">
          {navBottomItems.map((item, index) => {
            return (
              <>
                <Link
                  href={`${BASE_URL}${item.href}`}
                  className={
                    currentRoute === `${BASE_URL}${item.href}`
                      ? "text-[#EFEF2E]"
                      : "text-white"
                  }
                >
                  <li
                    key={index}
                    className={classNames({
                      "": true, //colors
                      "flex gap-4 items-center ": true, //layout
                      "transition-colors duration-300": true, //animation
                      "rounded-md px-2 mx-2 text-xs ": true, //self style
                    })}
                  >
                    <Icon icon={item.icon} /> {item.label}
                  </li>
                </Link>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export const BASE_URL = "/admin";

export const navItems = [
  { href: "/get-started", label: "Get Started", icon: "ph:globe" },
  {
    href: "/compliance",
    label: "Compliance",
    text: "PAYMENT",
    icon: "teenyicons:tick-circle-outline",
  },
  { href: "/", label: "Home", icon: "carbon:home" },

  {
    href: "/transaction",
    label: "Transaction",
    icon: "ion:card-outline",
  },
  {
    href: "/clients",
    label: "Clients",
    icon: "fluent-emoji-high-contrast:open-hands",
  },
  { href: "/refunds", label: "Refunds", icon: "iconoir:reload-window" },
  { href: "/payouts", label: "Payouts", icon: "solar:round-arrow-down-broken" },
  { href: "/disputes", label: "Disputes", icon: "cil:balance-scale" },
  {
    href: "/transaction-split",
    label: "Transaction Split",
    icon: "game-icons:split-arrows",
  },
  {
    href: "/sub-accounts",
    label: "Sub accounts",
    icon: "teenyicons:folders-outline",
  },
  { href: "/terminal", label: "Terminal", text: "RECURRING", icon: "ph:train" },
  {
    href: "/subscribers",
    label: "Subscribers",
    icon: "ic:outline-rotate-left",
  },
  { href: "/plans", label: "Plans", icon: "solar:home-wifi-angle-linear" },
  {
    href: "/subscriptions",
    label: "Subscriptions",
    text: "MARKETPLACE",
    icon: "icon-park-outline:multi-rectangle",
  },
  {
    href: "/payment",
    label: "Payment Pages",
    icon: "gridicons:product",
  },
  { href: "/product", label: "Product", icon: "game-icons:shopping-cart" },
  { href: "/storefronts", label: "Storefronts", icon: "uil:store" },
  { href: "/orders", label: "Orders ", icon: "iconoir:delivery-truck" },
  { href: "/invoice", label: "Invoice", icon: "teenyicons:invoice-outline" },
];
export const navBottomItems = [
  { href: "/audit-logs", label: "Audit Logs", icon: "ph:eye" },
  { href: "/settings", label: "Settings", icon: "ic:outline-settings" },
];
export default Sidebar;
