"use client";
import React from "react";
import Navbar from "../components/Admin/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
      <div>
        <Navbar title={"Payment Pages"} />
      </div>

      <div className=" mt-3 bg-white">{children}</div>
    </div>
  );
};

export default Layout;
