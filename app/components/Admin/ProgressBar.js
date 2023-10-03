import React from "react";

export default function ProgressBar({ width }) {
  return (
    <div className="h-3 rounded-md w-full bg-[#E0E0E0] ">
      <div
        className="h-3 rounded-md bg-[#227418]"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
}
