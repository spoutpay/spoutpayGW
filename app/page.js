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
      localStorage.setItem("token", response.data.data.token)
      router.push("/admin");
    } catch (error) {
      console.log("Error", error);
      setMessage(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <main className="flex justify-center align-center">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-1/4 mt-40 text-center"
      >
        <h3 className="text-center">Sign In</h3>
        {message && <small className="mt-3 mb-3 text-red-500">{message}</small>}
        <InputField
          label="Email"
          type="email"
          placeholder="email@gmail.com"
          wrapClass="relative mt-3 mb-3 w-100"
          name="email"
          register={register}
          error={errors.email?.message}
        />
        <InputField
          label="Password"
          type="password"
          placeholder="**********"
          wrapClass="relative mb-3"
          name="password"
          register={register}
          error={errors.password?.message}
        />
        <Button text="Submit" variant="tulip" buttonType="submit" />
      </form>
    </main>
  );
};

export default LoginForm;
