import React from "react";
import { Icon } from "@iconify/react";

const InputWithIcon = ({ icon, color, ...rest }) => {
  return (
    <div className="relative">
      <input className="px-4 py-2 border rounded-md w-[20rem]" {...rest} />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <Icon icon={icon} color={color} />
      </div>
    </div>
  );
};
export default InputWithIcon;
