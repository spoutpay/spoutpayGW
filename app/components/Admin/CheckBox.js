import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

function Checkbox({
  color = "#0981FC",
  name,
  register,
  size = 20,
  buttonClassName,
  value,
  setValue,
}) {
  const [isChecked, setisChecked] = useState(false);
  useEffect(() => {
    register(name); // Register the checkbox input with useForm
  }, [name, register]);

  const handleCheckboxChange = () => {
    console.log("LOGGGGES", name, !value);
    setValue(name, !value); // Toggle the checkbox value in the form's state
    setisChecked(!isChecked);
  };
  const _color = `bg-[${color}]`;
  return (
    <button
      title="check"
      type="button"
      className={`${buttonClassName} w-fit cursor-pointer border-[1px] rounded-full p-3 border-gray-500`}
      onClick={handleCheckboxChange}
      // defaultChecked={checked}
      style={{ backgroundColor: isChecked ? color : "white" }}
    >
      {value && (
        <Icon
          icon="fluent:checkmark-12-filled"
          width={size}
          height={size}
          className={`${isChecked ? "text-white" : "opacity-0"}`}
          // color={`${isChecked ? "white" : "blue"}`}
        />
      )}
    </button>
  );
}

export default Checkbox;
