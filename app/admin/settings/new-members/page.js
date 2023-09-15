"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import AppData from "../../../config/appData.json";
import * as yup from "yup";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Toast from "@/app/components/Toast";
import InputField from "@/app/components/InputField";

const NewMembers = () => {
  const router = useRouter();
  const [token, setToken] = useState("");

  const [toastInfo, setToastInfo] = useState(null);
  const closeToast = () => {
    setToastInfo(null);
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const options = [
    { option: "Owner", value: "owner" },
    { option: "Developer", value: "developer" },
    { option: "Operations", value: "operations" },
    { option: "customer support", value: "customer_support" },
    { option: "Administrator", value: "administrator" },
  ];

  const schema = yup.object().shape({
    email: yup.string().required("email address is required!"),
    role: yup.string().required("role is required!"),
  });

  const handleTeam = async (requestData) => {
    try {
      const endpoint = `${AppData.BASE_URL}settings/members`;
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
    resolver: yupResolver(schema),
  });
  return (
    <>
      <div className="px-10 bg-white pt-5">
        <div className="flex justify-between w-full items-center border-b border-[#7E7E7E] pb-2">
          <h2 className="text-lg">Invite New Members</h2>
          <button
            type="button"
            className="border border-black px-7 py-2 rounded-sm"
            onClick={() => router.push("/admin/settings")}
          >
            Cancel
          </button>
        </div>
        <form action="" onSubmit={handleSubmit(handleTeam)}>
          <div className="flex gap-20">
            <div className="w-2/5">
              <h4>Send an invite to new members</h4>
              <p>
                Enter the email address of the user you want to invite, and
                choose the role they should have.
              </p>

              <div className="my-5">
                <label htmlFor="">Email</label>
                <InputField
                  type="text"
                  placeholder=""
                  wrapClass="w-full  h-[2.7rem]"
                  name="email"
                  register={register}
                  error={errors.email?.message}
                />
              </div>
              <div>
                <label htmlFor="">Business Owner</label>
                <br />
                <select
                  name="role"
                  id="role"
                  {...register("role")}
                  onChange={(e) => setValue("role", e.target.value)}
                  className="border border-[#7E7E7E] w-full h-[2.7rem] px-3"
                >
                  {options.map((i, idx) => (
                    <option value={i.value} key={idx}>
                      {i.option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-3/5 border border-[#707070] rounded-2xl p-5 mr-20 mt-5">
              <p className="border-b border-[#707070]">Role Descriptions</p>
              <div className="py-3 border-b border-[#707070] ">
                <span className="flex gap-2">
                  <p>Owner </p>
                  <p>-</p>
                  <p className="text-[#C6C6C6]">
                    This role is best suited for the business owner, or an
                    executive team member that will require full admin access
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
                    This works best for team members who need visibility on
                    customer and beneficiary lists, and can manage transfers
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
                    IT Specialist - This is best for developers working with
                    spout pay APIs or making team changes at the API level.
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
                    IT Specialist - This is best for developers working with
                    spout pay APIs or making team changes at the API level.
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
                    This role is best suited for the business owner, or an
                    executive team member that will require full admin access
                  </p>
                </span>
                <Link href="" className="underline text-[#0B7EF8]">
                  View Permission
                </Link>
              </div>
              <div className="flex justify-end mt-10">
                <button
                  className="bg-[#0981FD] py-3 text-white w-[15rem] rounded-md"
                  type="submit"
                >
                  Add Permissions
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {toastInfo && (
        <Toast
          message={toastInfo.message}
          type={toastInfo.type}
          onClose={closeToast}
        />
      )}
    </>
  );
};

export default NewMembers;
