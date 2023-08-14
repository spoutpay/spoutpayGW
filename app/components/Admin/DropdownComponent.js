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
    <div className={`${className} `}>
      <button
        className="flex items-center gap-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon icon={leftIcon} width="15" />
        {selectedOption ? selectedOption.label : <div> {title} </div>}
        <Icon icon={icon} width="15" />
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
