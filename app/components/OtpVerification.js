import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import OTPInput from "react-otp-input";
import AppData from "../config/appData.json";
import axios from "axios";
import Button from "./Button";
import { useRouter } from "next/navigation";

const OtpVerification = ({ response }) => {
  const requestAmount = "80";
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const { message, paymentId, plainTextSupportMessage, transactionRef } =
    response;

  const schema = yup.object().shape({
    transactionRef: yup.string().default(transactionRef),
    otp: yup.string().required("Enter OTP to continue").default(otp),
    paymentId: yup.string().default(paymentId),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const confirmOtp = async (data) => {
    console.log("data", data);
    const endpoint = AppData.BASE_URL + "interswitch/otp";

    try {
      const response = await axios.post(endpoint, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/payment/success");
      console.log("result", response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="text-center mt-6">
      {message && <p>{message}</p>}
      <form
        className="otp-inputs mt-6 grid"
        onSubmit={handleSubmit(confirmOtp)}
      >
        <div className="flex justify-center align-center ml-2 mb-4 mt-4">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span> </span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <div>
          <Button text={`Pay NGN ${requestAmount}`} variant="tulip" />
        </div>
      </form>
      {plainTextSupportMessage && (
        <p className="mt-6 text-xs">{plainTextSupportMessage}</p>
      )}
    </div>
  );
};

export default OtpVerification;
