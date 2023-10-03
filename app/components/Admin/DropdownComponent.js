"use client";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const Dropdown = ({ options, onSelect, icon, className, leftIcon, title }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`${className} relative inline-block text-left `}>
      <button
        className=" items-center gap-3 flex justify-start"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <Icon icon={leftIcon} width="15" />
        {selectedOption ? selectedOption : <div> {title} </div>}
        <Icon icon={icon} width="15" />
      </button>
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

export default Dropdown;
