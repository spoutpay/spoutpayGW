"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const activeNavClass =
  "flex bg-gray-700 border-b-0 border-yellow-300 border-e-8 text-white gap-2 px-2 py-4 block cursor-pointer";

const navClass =
  "flex border-b-2 border-slate-100 gap-2 px-2 py-4 text-dark block cursor-pointer";

const Navigation = ({ navItems }) => {
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState(0);

  const activateNav = (index) => {
    setActiveNav(index);
  };

  const imageStyle = {
    width: "20px",
    height: "20px",
  };

  return (
    <ul>
      {navItems.map((nav, i) => {
        const isActive = pathname.startsWith(nav.href);
        return (
          <li key={i}>
            <Link
              href={nav.href}
              onClick={() => activateNav(i)}
              className={i === activeNav ? activeNavClass : navClass}
            >
              <div className={nav.navItemClass}>
                <Image
                  src={nav.imageSrc}
                  style={imageStyle}
                  width="0"
                  height="0"
                  alt={nav.name}
                />
              </div>
              {nav.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
