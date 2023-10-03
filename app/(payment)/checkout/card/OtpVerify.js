import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import OTPInput from "react-otp-input";
import AppData from "../../config/appData.json";
import axios from "axios";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";
import Status from "../status/Status";

export default function OtpVerify({ response }) {
  const requestAmount = "80";
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [isProccessed, setIsProcessed] = useState(false);
  const [processedMsg, setProcessedMsg] = useState("");
  const router = useRouter();

  const { message, paymentId, plainTextSupportMessage, transactionRef } =
    response;

  const schema = yup.object().shape({
    transactionRef: yup.string().default(transactionRef),
    otp: yup.string().required("Enter OTP to continue").min(6).default(otp),
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
    console.log("zjfkjdj ", data);
    const endpoint = AppData.BASE_URL + "interswitch/otp";

    try {
      setLoading(true);
      const response = await axios.post(endpoint, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setProcessedMsg("success");
      setIsProcessed(true);
      console.log("result", response.data);
    } catch (error) {
      setProcessedMsg("failed");
      setIsProcessed(true);
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      {!isProccessed ? (
        <form
        className={
          errors.pin ? "otp-inputs error ml-24 w-3/5" : "otp-inputs ml-24 w-3/5"
        }
        onSubmit={handleSubmit(confirmOtp)}
      >
        {message && <p>{message}</p>}
        <div className="flex justify-center align-center ml-2 mb-12 mt-4">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span className="text-white"> -- </span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        {errors.pin && (
          <p className="text-red-500 text-xs italic mt-1 mb-2">
            {errors.pin.message}
          </p>
        )}
        <div>
          <Button
            text={loading ? "Loading..." : `Pay NGN ${requestAmount}`}
            variant="tulip"
          />
        </div>
        {plainTextSupportMessage && (
          <p className="mt-6 text-xs">{plainTextSupportMessage}</p>
        )}
      </form>
      ) : (<Status message={processedMsg}/>)}
    </div>
  );
}
