"use client";
import React, { useState } from "react";

const ApiKeys = () => {
  const [key, setKey] = useState("1");
  return (
    <div className="text-[#7E7E7E]">
      <p className="text-lg">Api Keys For Sanusi</p>
      <div className="  mt-10">
        <ul className="flex gap-10 w-full border-b border-black cursor-pointer">
          <li
            onClick={() => setKey(1)}
            className={key === 1 ? "text-[#0981FD]" : ""}
          >
            Live Api Keys
          </li>
          <li
            onClick={() => setKey(2)}
            className={key === 2 ? "text-[#0981FD]" : ""}
          >
            Test Api Keys
          </li>
        </ul>
      </div>
      <div className="mt-5">
        {key == 1 ? (
          <div className="">
            <form action="">
              <div className="">
                <label htmlFor="">Public Key</label>
                <br />
                <input
                  type="text"
                  className="border border-[#7E7E7E] bg-[#F2F2F2] outline-none p-2 w-[25rem]"
                />
                <button className="bg-[#7E7E7E] text-white py-[9px] px-5">
                  Copy
                </button>
              </div>
              <div className="mt-5">
                <label htmlFor="" className="mt-5">
                  Secret Key
                </label>
                <br />
                <input
                  type="text"
                  className="border border-[#7E7E7E] bg-[#F2F2F2] outline-none p-2 w-[25rem]"
                />
                <button className="bg-[#7E7E7E] text-white py-[9px] px-5">
                  Copy
                </button>
              </div>
              <div className=" mt-5">
                <label htmlFor="">Encryption Key</label>
                <br />
                <input
                  type="text"
                  className="border border-[#7E7E7E] bg-[#F2F2F2] outline-none p-2 w-[25rem]"
                />
                <button className="bg-[#7E7E7E] text-white py-[9px] px-5">
                  Copy
                </button>
              </div>

              <button className="mt-14 bg-black text-white py-2 w-[280px]">
                {" "}
                Generate New Api Keys
              </button>
            </form>
          </div>
        ) : (
          <div>hi</div>
        )}
      </div>
    </div>
  );
};

export default ApiKeys;
