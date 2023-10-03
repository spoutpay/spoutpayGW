"use client";

import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./components/Button";
import InputField from "./components/InputField";
import AppData from "./config/appData.json";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid Email Address")
    .required("Email is required!"),
  password: yup.string().required("Password is required!"),
});

const LoginForm = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (requestData) => {
    try {
      const endpoint = `${AppData.BASE_URL}auth/login`;
      const response = await axios.post(endpoint, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.setItem("token", response.data.data.token);
      router.push("/admin");
    } catch (error) {
      console.log("Error", error);
      setMessage(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <main className="flex h-full ">
      <div className="w-1/2 ml-20 pt-7">
        <Image
          src="/logo.svg"
          alt="spout pay Logo"
          width={100}
          height={100}
          className="mb-10"
        />
        <h3 className=" text-2xl font-bold">Get Started</h3>
        <p className="text-[#BEBEBE] mb-5">Enter your details to login</p>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className=" border p-16 rounded-xl border-[#060D27] w-[450px] "
        >
          {message && (
            <small className="mt-3 mb-3 text-red-500">{message}</small>
          )}
          <label htmlFor="" className="">
            Email
          </label>
          <InputField
            type="email"
            placeholder="email@gmail.com"
            wrapClass="relative mt-3 mb-3 "
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <label htmlFor="" className="">
            Password
          </label>
          <InputField
            type="password"
            placeholder="**********"
            wrapClass="relative mb-3 "
            name="password"
            register={register}
            error={errors.password?.message}
          />
          <p className="text-right text-[#6E90FF] py-2">Forgot Password</p>
          <Button text="Login" variant="dark" buttonType="submit" />

          <p className="text-[#BEBEBE] text-center mt-20">
            Are you new here?{" "}
            <Link href="/sign-up" className="font-bold text-black">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <div className="w-1/2 bg-[#060D27] h-screen text-white pl-10 pt-[11rem]">
        <h2 className="">The simplest way to manage your business</h2>
        <p className="text-[#C1C1C1]">
          Spoutpay helps you manage your business across borders
        </p>
        <div className="block mt-10">
          <div className=" w-full flex justify-end ">
            <Image
              src="/refund.png"
              alt="refund image"
              width={550}
              height={600}
              className=" relative  object-cover h-[550px] "
            />
          </div>

          <Image
            src="/payment.png"
            alt="payment image"
            width={450}
            height={400}
            className="absolute bottom-0 "
          />
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
