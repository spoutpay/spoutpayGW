"use client";

import React, { useState } from "react";
import Third from "../components/Admin/Steps/Third";
import Second from "../components/Admin/Steps/Second";
import First from "../components/Admin/Steps/First";

const PaymentPages = () => {
  const [page, setPage] = useState(0);
  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <First />;
      case 1:
        return <Second />;
      case 2:
        return <Third />;
      default:
        return <First />;
    }
  };

  const handleSubmit = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div>
        {" "}
        {conditionalComponent()}
        <div className="flex px-60 gap-2 mt-10">
          <button
            type="button"
            className="border border-black py-2 px-5 rounded-sm"
          >
            Cancel
          </button>
          <button
            className="bg-black py-2 px-5 text-white rounded-sm"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentPages;
