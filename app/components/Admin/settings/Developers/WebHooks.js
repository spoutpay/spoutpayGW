"use client";
import React, { useState } from "react";
import Checkbox from "../../CheckBox";

const WebHooks = () => {
  const [hooks, setHooks] = useState("1");
  return (
    <div className="text-[#7E7E7E]">
      <p className="text-lg">Webhooks For Sanusi</p>
      <div className="  mt-10">
        <ul className="flex gap-10 w-full border-b border-black cursor-pointer">
          <li
            onClick={() => setHooks(1)}
            className={hooks === 1 ? "text-[#0981FD]" : ""}
          >
            Live Webhooks
          </li>
          <li
            onClick={() => setHooks(2)}
            className={hooks === 2 ? "text-[#0981FD]" : ""}
          >
            Test Webhooks
          </li>
        </ul>
      </div>
      <div className="mt-5">
        {hooks == 1 ? (
          <div className="">
            <form action="">
              <div className="">
                <label htmlFor="">Url</label>
                <br />
                <input
                  type="text"
                  className="border border-[#7E7E7E]  outline-none p-2 w-[30rem]"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="" className="mt-5">
                  Secret Hash
                </label>
                <br />
                <input
                  type="text"
                  className="border border-[#7E7E7E]  outline-none p-2 w-[30rem]"
                />
              </div>

              <div className="mt-5">
                <p className="font-bold text-lg">Webhook Preferences</p>
                <div className="flex items-center gap-2 mt-2">
                  <Checkbox color="#000000" />
                  <label htmlFor="">
                    Receive Webhook Response In Json Format
                  </label>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Checkbox color="#000000" />
                  <label htmlFor="">Enable Webhook Retries</label>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <Checkbox color="#000000" />
                  <label htmlFor="">
                    Enable Webhook For Failed Transactions
                  </label>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Checkbox color="#000000" />
                  <label htmlFor="">Enable V3 Webhooks</label>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Checkbox color="#000000" />
                  <label htmlFor="">
                    Enable Resend Webhook From The Dashboard
                  </label>
                </div>
              </div>
              <button className="mt-5 bg-black text-white py-2 px-5">
                {" "}
                Save
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

export default WebHooks;
