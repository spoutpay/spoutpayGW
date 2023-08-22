"use client";
import { Icon } from "@iconify/react";
import React from "react";
import InputWithIcon from "../components/Admin/InputWithIcon";
import CurrencyInput from "../components/Admin/CurrencyInput";

const PaymentPages = () => {
  return (
    <div>
      <div className="flex items-center gap-5 mt-5 px-10">
        <Icon
          icon="material-symbols:cancel-outline"
          color="#e67300"
          width={25}
        />
        <p className="w-full bg-[#EFEFEF] px-10 py-2">
          Create single shared link
        </p>
      </div>
      <div className="px-[5.2rem] mt-10">
        <form action="">
          <label htmlFor="">Page Title</label>
          <InputWithIcon className="w-[30rem] px-4 py-2 border rounded-md" />
          <label htmlFor="" className="mt-10">
            Description
          </label>
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className=" w-[30rem] px-4 py-2 border rounded-md h-[10rem]"
          ></textarea>
          <div>
            <CurrencyInput />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPages;
