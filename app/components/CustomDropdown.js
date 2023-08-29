"use client";

import React, { useState } from "react";

const CustomDropdown = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const labelClassName =
    "block text-gray-700 mb-2 absolute start-2.5 top-2 text-xs uppercase";

  return (
    <div className="relative inline-block text-left w-full mb-5 focus:border-input-focus">
      <div>
        <label className={labelClassName}>{label}</label>
        <span className="rounded-md shadow-sm">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex justify-start w-full px-2.5 pt-6 pb-2.5 rounded text-xs text-gray-700 bg-white border border-gray-300 focus:outline-none"
          >
            {selectedOption ? selectedOption.label : "Select an option"}
          </button>
        </span>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b"
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
