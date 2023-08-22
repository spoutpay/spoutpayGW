import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

function Checkbox({
  color = "#0981FC",
  onChange,
  size = 20,
  buttonClassName,
  initialValue = false,
  checked = false,
  value = null,
  setValue,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => {
    onChange && onChange(!isChecked);
    if (value !== null) {
      //   setValue();
    } else {
      setIsChecked((prev) => {
        return !prev;
      });
    }
  };

  useEffect(() => {
    setIsChecked(value);
  }, [value, setIsChecked]);

  useEffect(() => {
    setIsChecked(initialValue);
  }, [initialValue, setIsChecked]);

  // const _size = `text-[200px]`;
  const _color = `bg-[${color}]`;
  return (
    <button
      title="check"
      type="button"
      className={`${buttonClassName} w-fit cursor-pointer border-[1px] rounded-full border-gray-500`}
      onClick={toggle}
      defaultChecked={checked}
      style={{ backgroundColor: isChecked ? color : "white" }}
    >
      <Icon
        icon="fluent:checkmark-12-filled"
        width={size}
        height={size}
        className={`${isChecked ? "text-white" : "opacity-0"}`}
        // color={`${isChecked ? "white" : "blue"}`}
      />
    </button>
  );
}

export default Checkbox;
