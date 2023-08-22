"use client";
import FileUploader from "@/app/components/Admin/FileUploader";
import Modal from "@/app/components/Admin/Modal";
import Link from "next/link";
import React, { useRef, useState } from "react";

const ChargeBack = () => {
  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState("");
  const handleFile = (file) => {
    setFileName(file.name);
  };

  return (
    <div className="p-5">
      <h1 className="text-xl">Dispute</h1>
      <hr className="bg-black h-[1px]" />

      <form action="" className="px-40 mt-10 w-2/3 ">
        <div className="border-b grid grid-cols-2 border-black py-3">
          <label htmlFor="amount" className="text-[#7E7E7E]">
            Amount
          </label>
          <input
            type="text"
            name=""
            placeholder="Amount"
            id=""
            className="text-end items-end border-none outline-none  p-2 bg-[#F5F5F5]"
          />
        </div>
        <div className="border-b grid grid-cols-2 border-black py-3">
          <label htmlFor="amount" className="text-[#7E7E7E]">
            Payment Reference
          </label>
          <input
            type="text"
            name=""
            placeholder="Payment"
            id=""
            className="text-end items-end border-none outline-none  p-2 bg-[#F5F5F5]"
          />
        </div>
        <div className=" border-b grid grid-cols-2 border-black py-3  ">
          <p className="text-[#7E7E7E]">Transaction Reference</p>
          <input
            type="text"
            name=""
            placeholder="Transaction"
            id=""
            className="text-end items-end border-none outline-none p-2 bg-[#F5F5F5]"
          />
        </div>
        <div className="border-b grid grid-cols-2 border-black py-3 ">
          <label htmlFor="amount" className="text-[#7E7E7E]">
            Customers Name
          </label>
          <input
            type="text"
            name=""
            placeholder="Customers"
            id=""
            className="text-end items-end border-none outline-none p-2 bg-[#F5F5F5]"
          />
        </div>
        <div className="border-b grid grid-cols-2 border-black py-3">
          <label htmlFor="amount" className="text-[#7E7E7E]">
            Log Code
          </label>
          <input
            type="text"
            name=""
            placeholder="Log Code"
            id=""
            className="text-end items-end border-none outline-none  p-2 bg-[#F5F5F5]"
          />
        </div>
        <div className="border-b grid grid-cols-2  border-black py-3">
          <label htmlFor="amount" className="text-[#7E7E7E]">
            Category
          </label>
          <input
            type="text"
            name=""
            placeholder="Category"
            id=""
            className="text-end items-end border-none outline-none  p-2 bg-[#F5F5F5]"
          />
        </div>
        <div className="border-b grid grid-cols-2 border-black py-3">
          <label htmlFor="amount" className="text-[#7E7E7E]">
            Reason
          </label>
          <input
            type="text"
            mm
            name=""
            placeholder="Reason"
            id=""
            className="text-end items-end border-none outline-none   p-2 bg-[#F5F5F5]"
          />
        </div>
        <div className="flex justify-end gap-2 mt-5">
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="border border-black py-2 px-5 rounded-sm"
          >
            Decline
          </button>
          <button className="bg-black py-2 px-5 text-white rounded-sm">
            Accept
          </button>
        </div>
      </form>

      {showModal && (
        <Modal title={"Decline Dispute"} onClose={() => setShowModal(false)}>
          <form action="">
            <label htmlFor="">Reasons for Decline</label>
            <textarea
              name="decline"
              id=""
              cols="30"
              rows="10"
              className="w-full h-[100px] border border-[#0981FC] rounded-md"
            ></textarea>

            <div className="mt-5">
              <label htmlFor="">Upload Evidence</label>
              <FileUploader />
            </div>

            <div className="flex justify-center gap-2 mt-10">
              <button
                type="button"
                className="border border-black py-2 px-5 rounded-sm"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="bg-black py-2 px-5 text-white rounded-sm">
                Submit
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default ChargeBack;
