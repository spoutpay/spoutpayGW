import React from "react";
import { Icon } from "@iconify/react";

const ButtonWithIcon = ({
  children,
  icon,
  color,
  size,
  className,
  ...rest
}) => {
  return (
    <button
      className={` ${className} flex items-center gap-4 px-4 py-2 rounded-md `}
      {...rest}
    >
      {children}
      <Icon icon={icon} color={color} width={size} />
    </button>
  );
};

export default ButtonWithIcon;
