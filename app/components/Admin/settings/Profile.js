"use client";
import React, { useState } from "react";
import InputWithIcon from "../InputWithIcon";
import NumberInput from "../NumberInput";
import PasswordInput from "../PasswordInput";

const Profile = () => {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState(false);
  return (
    <div className="mt-12 text-[#696363]">
      <form action="">
        <p className="mb-4">Personal Information</p>

        <div className="flex gap-3 items-center">
          <span>
            <label htmlFor="">First Name</label>
            <InputWithIcon className="w-[25rem] px-4 py-2 border rounded-md" />
          </span>
          <span>
            <label htmlFor="">Last Name</label>
            <InputWithIcon className="w-[25rem] px-4 py-2 border rounded-md" />
          </span>
        </div>
        <div className="flex gap-3 items-center mt-5">
          <span>
            <label htmlFor="">Email</label>
            <InputWithIcon className="w-[25rem] px-4 py-2 border rounded-md" />
          </span>
          <span>
            <label htmlFor="">Phone Number</label>
            <NumberInput inputClassName={"w-[22.1rem]"} />
          </span>
        </div>

        <button className="bg-[#060D27] text-white px-5 py-3 rounded-sm mt-10">
          Save Changes
        </button>

        {/* Change Password */}
        <p className="mb-4 mt-10">Password</p>

        <div className="flex gap-3 items-center">
          <span>
            <label htmlFor="">Old Password</label>
            <PasswordInput />
          </span>
          <span>
            <label htmlFor="">New Password</label>
            <PasswordInput />
          </span>
        </div>

        <button className="bg-[#696969] text-white px-5 py-3 rounded-sm mt-10">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default Profile;
