"use client";
import React, { useEffect, useState } from "react";
import AppData from "../../../../config/appData.json";
import axios from "axios";

const ApiKeys = () => {
  const [key, setKey] = useState("1");
  const [apiKey, setApiKey] = useState("");
  const [token, setToken] = useState();
  const [livePublicKeyCopied, setLivePublicKeyCopied] = useState(false);
  const [liveSecretKeyCopied, setLiveSecretKeyCopied] = useState(false);
  const [testPublicKeyCopied, setTestPublicKeyCopied] = useState(false);
  const [testSecretKeyCopied, setTestSecretKeyCopied] = useState(false);

  const copyPublicKey = async () => {
    await navigator.clipboard.writeText(publicKey);
    setLivePublicKeyCopied(!livePublicKeyCopied);
  };

  const copySecretKey = async () => {
    await navigator.clipboard.writeText(secretKey);
    setLiveSecretKeyCopied(!liveSecretKeyCopied);
  };
  const copyTestPublicKey = async () => {
    await navigator.clipboard.writeText(publicKey);
    setTestPublicKeyCopied(!testPublicKeyCopied);
  };

  const copyTestSecretKey = async () => {
    await navigator.clipboard.writeText(secretKey);
    setTestSecretKeyCopied(!testSecretKeyCopied);
  };

  console.log(apiKey?.data?.data?.live_secret_key);

  const secretKey = apiKey?.data?.data?.live_secret_key;

  const publicKey = apiKey?.data?.data?.live_pub_key;
  const testSecretKey = apiKey?.data?.data?.test_secret_key;
  const testPublicKey = apiKey?.data?.data?.test_pub_key;

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleKey = async () => {
    try {
      const endpoint = `${AppData.BASE_URL}settings/apikey`;
      const response = await axios.post(
        endpoint,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log("Error", error);
      // setMessage(error.response?.data?.error || "An error occurred");
    }
  };

  useEffect(() => {
    axios
      .get(`${AppData.BASE_URL}settings/apikey`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setApiKey(response);
      })
      .catch(function (error) {});
  }, []);

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
        {/* Live Keys */}
        {key == 1 ? (
          <div className="">
            <form action="">
              <div className="">
                <label htmlFor="">Public Key</label>
                <br />
                <input
                  value={publicKey}
                  disabled={true}
                  type="text"
                  className="border border-[#7E7E7E] bg-[#F2F2F2] outline-none p-2 w-[25rem]"
                />
                <button
                  onClick={copyPublicKey}
                  disabled={!publicKey}
                  className="bg-[#7E7E7E] text-white py-[9px] px-5 hover:bg-black"
                  type="button"
                >
                  {livePublicKeyCopied ? "Copied" : "Copy"}
                </button>
              </div>

              <p className="text-sm text-[#BC7D27] w-[30rem] mb-20">
                For The Safety Of Your Account, When You Generate A Secret Key
                You Will Only Be Able To See And Download It Once. If A New
                Secret Key Is Generated, It Needs To Be Replaced Everywhere It
                Exists.
              </p>
              <div className="mt-5">
                <label htmlFor="" className="mt-5">
                  Secret Key
                </label>
                <br />
                <input
                  type="text"
                  value={
                    liveSecretKeyCopied ? "*******************" : secretKey
                  }
                  disabled={true}
                  className="border border-[#7E7E7E] bg-[#F2F2F2] outline-none p-2 w-[25rem]"
                />
                <button
                  onClick={copySecretKey}
                  disabled={liveSecretKeyCopied ? true : false}
                  className="bg-[#7E7E7E] text-white py-[9px] px-5 hover:bg-black"
                  type="button"
                >
                  {liveSecretKeyCopied ? "Copied" : "Copy"}
                </button>
              </div>
              <div className=" mt-5">
                <label htmlFor="">Encryption Key</label>
                <br />
                <input
                  type="text"
                  className="border border-[#7E7E7E] bg-[#F2F2F2] outline-none p-2 w-[25rem]"
                />
                <button
                  className="bg-[#7E7E7E] text-white py-[9px] px-5"
                  type="button"
                >
                  Copy
                </button>
              </div>

              <button
                className="mt-14 bg-black text-white py-2 w-[280px]"
                type="submit"
                onSubmit={handleKey}
              >
                {" "}
                Generate New Api Keys
              </button>
            </form>
          </div>
        ) : (
          <div className="">
            {/* test keys */}
            <form action="">
              <div className="">
                <label htmlFor="">Public Key</label>
                <br />
                <input
                  value={testPublicKey}
                  disabled={true}
                  type="text"
                  className="border border-[#7E7E7E] bg-[#F2F2F2] outline-none p-2 w-[25rem]"
                />
                <button
                  onClick={copyTestPublicKey}
                  disabled={!testPublicKey}
                  className="bg-[#7E7E7E] text-white py-[9px] px-5 hover:bg-black"
                  type="button"
                >
                  {testPublicKeyCopied ? "Copied" : "Copy"}
                </button>
              </div>
              <div className="mt-5">
                <label htmlFor="" className="mt-5">
                  Secret Key
                </label>
                <br />
                <input
                  type="text"
                  defaultValue={testSecretKey}
                  value={testSecretKey}
                  disabled={true}
                  className="border border-[#7E7E7E] bg-[#F2F2F2] outline-none p-2 w-[25rem]"
                />
                <button
                  onClick={copyTestSecretKey}
                  disabled={!testSecretKey}
                  className="bg-[#7E7E7E] text-white py-[9px] px-5 hover:bg-black"
                  type="button"
                >
                  {testSecretKeyCopied ? "Copied" : "Copy"}
                </button>
              </div>
              <div className=" mt-5">
                <label htmlFor="">Encryption Key</label>
                <br />
                <input
                  type="text"
                  className="border border-[#7E7E7E] bg-[#F2F2F2] outline-none p-2 w-[25rem]"
                />
                <button
                  className="bg-[#7E7E7E] text-white py-[9px] px-5"
                  type="button"
                >
                  Copy
                </button>
              </div>

              <button
                className="mt-14 bg-black text-white py-2 w-[280px]"
                type="submit"
                onSubmit={handleKey}
              >
                {" "}
                Generate New Api Keys
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiKeys;
