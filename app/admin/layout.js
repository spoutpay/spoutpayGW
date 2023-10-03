"use client";
import React, { useState } from "react";
import Navbar from "../components/Admin/Navbar";
import Sidebar from "../components/Admin/Sidebar";
import { Providers } from "../providers";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
      <div>
        <Navbar
          onMenuButtonClick={() => setSidebarOpen((prev) => !prev)}
          title={""}
        />
      </div>

      <div className="grid md:grid-cols-sidebar mt-3  bg-[#F5F5F5]">
        <div className="overflow-hidden">
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        </div>
        <div className="overflow-auto bg-white">
          <Providers>{children}</Providers>
        </div>
      </div>
    </div>
  );
};

export default Layout;
