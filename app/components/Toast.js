import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Toast = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000); // Hide the toast after 3 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const toastClasses = {
    success: "bg-[#DBFEEB]",
    error: "bg-red-500",
  };

  return (
    <>
      {isVisible && (
        <div
          className={`fixed top-20 right-4 p-4  rounded-md ${toastClasses[type]} `}
        >
          <span className="flex items-center  gap-10">
            {" "}
            <Icon icon="ep:success-filled" color="#009846" /> <p> {message} </p>
          </span>
        </div>
      )}
    </>
  );
};

export default Toast;
