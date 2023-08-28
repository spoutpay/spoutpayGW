"use client";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const PasswordInput = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  return (
    <div>
      {" "}
      <div className="relative">
        <input
          className="w-[25rem] px-4 py-2 border rounded-md "
          type={visible ? "text" : "password"}
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={toggleVisibility}
        >
          <Icon icon="mingcute:eye-2-fill" color="#D9D9D9" />
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
