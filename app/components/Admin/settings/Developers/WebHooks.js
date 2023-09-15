"use client";
import React, { useState } from "react";
import Checkbox from "../../CheckBox";
import InputField from "@/app/components/InputField";
import axios from "axios";
import AppData from "../../../../config/appData.json";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Toast from "../../../Toast";

const WebHooks = () => {
  const [hooks, setHooks] = useState("1");
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const [toastInfo, setToastInfo] = useState(null);
  const closeToast = () => {
    setToastInfo(null);
  };
  const liveSchema = yup.object().shape({
    live_url: yup.string().required(),
    test_url: yup.string().required(),
    resciveInJson: yup.boolean().required(),
    enableRetries: yup.boolean().required(),
    enableForFailed: yup.boolean().required(),
    enableSendFromDashboard: yup.boolean().required(),
  });

  // const testSchema = yup.object().shape({
  //   test_url: yup.string().required(),
  // });

  const handleLiveWebhooks = async (requestData) => {
    try {
      const endpoint = `${AppData.BASE_URL}settings/webhook`;
      const response = await axios.post(endpoint, requestData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);

      setToastInfo({ message: response?.data?.data?.message, type: "success" });
    } catch (error) {
      console.log("Error", error);
      // setMessage(error.response?.data?.error || "An error occurred");
      setToastInfo({ message: "Error making the API call", type: "error" });
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(liveSchema),
  });

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
            <form action="" onSubmit={handleSubmit(handleLiveWebhooks)}>
              <div className="">
                <label htmlFor=""> Live Url</label>
                <br />
                <InputField
                  register={register}
                  name={"live_url"}
                  type={"text"}
                  wrapClass={"outline-none pb-5 w-1/2"}
                />
                <label htmlFor="">Test Url</label>
                <br />
                <InputField
                  register={register}
                  name={"test_url"}
                  type={"text"}
                  wrapClass={" outline-none  w-1/2"}
                />
                {/* <input
                  type="text"
                  className="border border-[#7E7E7E]  outline-none p-2 w-[30rem]"
                /> */}
              </div>
              {/* <div className="mt-5">
                <label htmlFor="" className="mt-5">
                  Secret Hash
                </label>
                <br />
                <input
                  type="text"
                  className="border border-[#7E7E7E]  outline-none p-2 w-[30rem]"
                />
              </div> */}

              <div className="mt-5">
                <p className="font-bold text-lg">Webhook Preferences</p>
                <div className="flex items-center gap-2 mt-2">
                  <Checkbox
                    color="#000000"
                    register={register}
                    name={"resciveInJson"}
                    setValue={setValue}
                  />
                  <label htmlFor="">
                    Receive Webhook Response In Json Format
                  </label>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Checkbox
                    color="#000000"
                    name={"enableRetries"}
                    register={register}
                    setValue={setValue}
                  />
                  <label htmlFor="">Enable Webhook Retries</label>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <Checkbox
                    color="#000000"
                    register={register}
                    name={"enableForFailed"}
                    setValue={setValue}
                  />
                  <label htmlFor="">
                    Enable Webhook For Failed Transactions
                  </label>
                </div>
                {/* <div className="flex items-center gap-2 mt-2">
                  <Checkbox color="#000000" />
                  <label htmlFor="">Enable V3 Webhooks</label>
                </div> */}
                <div className="flex items-center gap-2 mt-2">
                  <Checkbox
                    color="#000000"
                    name={"enableSendFromDashboard"}
                    register={register}
                    setValue={setValue}
                  />
                  <label htmlFor="">
                    Enable Resend Webhook From The Dashboard
                  </label>
                </div>
              </div>
              <button
                className="mt-5 bg-black text-white py-2 px-5"
                type="submit"
              >
                {" "}
                Save
              </button>
            </form>
          </div>
        ) : (
          <div>hi</div>
        )}
      </div>
      {toastInfo && (
        <Toast
          message={toastInfo.message}
          type={toastInfo.type}
          onClose={closeToast}
        />
      )}
    </div>
  );
};

export default WebHooks;
