"use client";
import { Icon } from "@iconify/react";
import React from "react";
import InputWithIcon from "../InputWithIcon";
import CurrencyInput from "../CurrencyInput";
import FileUploader from "../FileUploader";
import NumberInput from "../NumberInput";

const Third = () => {
  return (
    <div className="">
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
      <div className="w-1/2">
        <div className="px-[5.2rem] mt-10 flex gap-8">
          <div>
            <form action="">
              <label htmlFor="">Page Title</label>
              <InputWithIcon className="w-[30rem] px-4 py-2 border rounded-md" />
              <div className="mt-5">
                <label htmlFor="" className="">
                  Description
                </label>

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className=" w-[30rem] px-4 py-2 border rounded-md h-[10rem]"
                ></textarea>
              </div>
              <div className="mt-5">
                <label htmlFor="" className="">
                  Ammount
                </label>
                <CurrencyInput />
              </div>
              <p className="text-xs text-[#AAAAAA] mt-3">
                Leave empty to customers enter desired amount
              </p>
              <div className="mt-5">
                <label htmlFor="">Donation Website</label>
                <select
                  name=""
                  id=""
                  className="w-[30rem] px-4 py-2 border rounded-md"
                >
                  <option value=""></option>
                </select>
              </div>
              <div className="mt-5">
                <label htmlFor="">Phone Number</label>
                <NumberInput inputClassName={"w-[28rem]"} />
              </div>
            </form>
          </div>
          <div>
            <p className="text-xs text-[#AAAAAA]">Upload Business Logo</p>
            <FileUploader className={"w-[30rem] rounded-lg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
