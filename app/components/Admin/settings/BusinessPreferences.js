import Link from "next/link";
import React from "react";
import InputWithIcon from "../InputWithIcon";
import NumberInput from "../NumberInput";
import FileUploader from "../FileUploader";
import Checkbox from "../CheckBox";
import CountryDropdown from "../CountryDropdown";

const BusinessPreferences = () => {
  return (
    <div>
      <div className="mt-2 text-[#696363]">
        <header className="bg-[#FEEDAC] flex items-center gap-3 p-3 px-5">
          <p>Please Re-Upload Your Documents</p>
          <p className="text-sm">
            - your account could not be verified. check your email to know why
            this happened
          </p>
          <Link href="/" className="underline text-sm">
            Upload Documents Here
          </Link>
        </header>
        <div className="flex gap-10  mt-10">
          <div>
            {" "}
            <form action="">
              <div className="flex gap-3 items-center">
                <span>
                  <label htmlFor="">Business Name</label>
                  <InputWithIcon className="w-[20rem] px-4 py-2 border rounded-md" />
                </span>
                <span>
                  <label htmlFor="">Business Email Address</label>
                  <InputWithIcon className="w-[20rem] px-4 py-2 border rounded-md" />
                </span>
              </div>
              <div className="flex gap-3 items-center mt-5">
                <span>
                  <label htmlFor="">Business Address</label>
                  <InputWithIcon className="w-[20rem] px-4 py-2 border rounded-md" />
                </span>
                <span>
                  <label htmlFor="">Phone Number</label>
                  <NumberInput inputClassName={"w-[17.1rem]"} />
                </span>
              </div>
              <div className="flex gap-3 items-center mt-5">
                <span>
                  <label htmlFor="">Suppport Email</label>
                  <InputWithIcon className="w-[20rem] px-4 py-2 border rounded-md" />
                </span>
                <span>
                  <label htmlFor="">Support Number</label>
                  <InputWithIcon className="w-[20rem] px-4 py-2 border rounded-md" />
                </span>
              </div>
              <div className="flex gap-3 items-center mt-5">
                <span>
                  <label htmlFor="">Country</label>
                  <CountryDropdown
                    className={"w-[20rem] px-4 py-[9px] border rounded-md"}
                  />
                </span>
                <span>
                  <label htmlFor="">Chargebacks(emails)</label>
                  <InputWithIcon className="w-[20rem] px-4 py-2 border rounded-md" />
                </span>
              </div>

              <button className="bg-[#060D27] text-white px-5 py-3 rounded-sm mt-10">
                Save Changes
              </button>

              <p className="mt-5 mb-3">Who Should Pay The Fees?</p>
              <div className="flex items-center gap-2">
                <Checkbox color="#000000" />
                <label htmlFor="">
                  Make Customers Pay The Transaction Fees
                </label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <Checkbox color="#000000" />
                <label htmlFor="">Charge Me For The Transaction Fees</label>
              </div>
              <p className="mt-5 mb-3">How Do You Want To Get Your Earnings?</p>
              <div className="flex items-center gap-2">
                <Checkbox color="#000000" />
                <label htmlFor="">Settle To My Bank Account</label>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <Checkbox color="#000000" />
                <label htmlFor="">Settle To My Payout Balance</label>
              </div>
            </form>
          </div>
          <div className="">
            <FileUploader className={"w-[30rem] rounded-lg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPreferences;
