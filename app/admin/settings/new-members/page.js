"use client";
import Dropdown from "@/app/components/Admin/DropdownComponent";
import InputWithIcon from "@/app/components/Admin/InputWithIcon";
import Link from "next/link";
import React, { useState } from "react";

const NewMembers = () => {
  const options = [{ option: "Owner" }];
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (option) => {
    setSelectedValue(option.value);
  };
  return (
    <div className="px-10 bg-white pt-5">
      <div className="flex justify-between w-full items-center border-b border-[#7E7E7E] pb-2">
        <h2 className="text-lg">Invite New Members</h2>
        <button className="border border-black px-7 py-2 rounded-sm">
          Cancel
        </button>
      </div>
      <div className="flex gap-20">
        <div className="w-2/5">
          <form action="">
            <h4>Send an invite to new members</h4>
            <p>
              Enter the email address of the user you want to invite, and choose
              the role they should have.
            </p>

            <div className="my-5">
              <label htmlFor="">Email</label>
              <InputWithIcon className="w-full border border-[#7E7E7E] h-[2.7rem] " />
            </div>
            <div>
              <label htmlFor="">Business Owner</label>
              <br />
              <select
                name=""
                id=""
                className="border border-[#7E7E7E] w-full h-[2.7rem] px-3"
              >
                {options.map((i, idx) => (
                  <option key={idx}>{i.option}</option>
                ))}
              </select>
            </div>
          </form>
        </div>
        <div className="w-3/5 border border-[#707070] rounded-2xl p-5 mr-20 mt-5">
          <p className="border-b border-[#707070]">Role Descriptions</p>
          <div className="py-3 border-b border-[#707070] ">
            <span className="flex gap-2">
              <p>Owner </p>
              <p>-</p>
              <p className="text-[#C6C6C6]">
                This role is best suited for the business owner, or an executive
                team member that will require full admin access
              </p>
            </span>
            <Link href="" className="underline text-[#0B7EF8]">
              View Permission
            </Link>
          </div>
          <div className="py-3 border-b border-[#707070] ">
            <span className="flex gap-2">
              <p>Operations </p>
              <p>-</p>
              <p className="text-[#C6C6C6]">
                This works best for team members who need visibility on customer
                and beneficiary lists, and can manage transfers
              </p>
            </span>
            <Link href="" className="underline text-[#0B7EF8]">
              View Permission
            </Link>
          </div>
          <div className="py-3 border-b border-[#707070] ">
            <span className="flex gap-2">
              <p>Developer/ IT Specialist </p>
              <p>-</p>
              <p className="text-[#C6C6C6]">
                IT Specialist - This is best for developers working with spout
                pay APIs or making team changes at the API level.
              </p>
            </span>
            <Link href="" className="underline text-[#0B7EF8]">
              View Permission
            </Link>
          </div>
          <div className="py-3 border-b border-[#707070] ">
            <span className="flex gap-2">
              <p>Customer Support</p>
              <p>-</p>
              <p className="text-[#C6C6C6]">
                IT Specialist - This is best for developers working with spout
                pay APIs or making team changes at the API level.
              </p>
            </span>
            <Link href="" className="underline text-[#0B7EF8]">
              View Permission
            </Link>
          </div>
          <div className="py-3  ">
            <span className="flex gap-2">
              <p>Administrator </p>
              <p>-</p>
              <p className="text-[#C6C6C6]">
                This role is best suited for the business owner, or an executive
                team member that will require full admin access
              </p>
            </span>
            <Link href="" className="underline text-[#0B7EF8]">
              View Permission
            </Link>
          </div>
          <div className="flex justify-end mt-10">
            <button className="bg-[#0981FD] py-3 text-white w-[15rem] rounded-md">
              Add Permissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMembers;
