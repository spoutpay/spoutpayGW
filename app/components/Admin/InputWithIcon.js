import React from "react";
import { Icon } from "@iconify/react";

const InputWithIcon = ({
  icon,
  onChange,
  value,
  iconOnclick,
  color,
  type,
  ...rest
}) => {
  return (
    <div className="relative">
      <input
        className="px-4 py-2 border rounded-md w-[20rem]"
        {...rest}
        value={value}
        onChange={onChange}
        type={type}
      />
      <button
        className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
        onClick={iconOnclick}
      >
        <Icon icon={icon} color={color} />
      </button>
    </div>
  );
};
export default InputWithIcon;
