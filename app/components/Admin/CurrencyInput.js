import React from "react";
import styles from "../../styles/currencyInput.module.css";

const CurrencyInput = () => {
  const currencyOptions = [
    { currency: "USD" },
    { currency: "EUR" },
    { currency: "GBP" },
    { currency: "JPY" },
    { currency: "AUD" },
  ];
  return (
    <div>
      <form className="border border-[#E4E7EB] w-[30rem] text-[#3E3D3D] rounded-md">
        <select name="" id="" className="border-r border-[#E4E7EB] h-[2.3rem] ">
          {currencyOptions.map((i, idx) => (
            <option key={idx}>{i.currency}</option>
          ))}
        </select>
        <input type="text" name="" id="" />
      </form>
    </div>
  );
};

export default CurrencyInput;
