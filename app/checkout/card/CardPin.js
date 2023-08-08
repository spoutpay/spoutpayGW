"use client"

import { useSelector } from "react-redux";
import Button from "@/app/components/Button";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import OTPInput from "react-otp-input";
import AppData from "../../config/appData.json";
import axios from "axios";
import OtpVerify from "./OtpVerify";
import Upsl from "./Upsl";

export default function CardPin() {
  const cardInfo = useSelector((state) => state.card.value.cardData)
  const amount = "80";
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [cardData, setCardData] = useState({});
  const [isValidateOtp, setIsValidateOtp] = useState(false);
  const [responseData, setResponseData] = useState({});
  const { pan, expDate, cvv } = cardInfo;
  const email = "onomeofogba@gmail.com";
  const phoneNum = "08103327651";
  const currency = "NGN";
  const name = "Onome Ofogba";
  let offset = new Date().getTimezoneOffset();
  let w = window.innerWidth;
  let h = window.innerHeight;
  let userLang = navigator.language;
  let depth = screen.colorDepth;
  let agent = navigator.userAgent;
  let java = navigator.javaEnabled();

  const cleanedExpDate = expDate?.replace(/\s|\/+/g, "");
  const cleanedPan = pan?.replace(/\s|\/+/g, "");

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup.object().shape({
    pan: yup.string().default(cleanedPan),
    expDate: yup.string().default(cleanedExpDate),
    cvv: yup.string().default(cvv),
    pin: yup.string().required("Enter pin to continue").min(4).default(otp),
    customer_name: yup.string().default(name),
    email_address: yup
      .string()
      .email("Enter a valid email address")
      .default(email),
    phone_number: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid!")
      .default(phoneNum),
    currency: yup.string().default(currency),
    amount: yup.string().default(amount),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const data = localStorage.getItem("paymentData");
    const payData = JSON.parse(data);
    setCardData(payData);
  }, []);

  const initiateCardTransaction = async (data) => {
    const endpoint = AppData.BASE_URL + "interswitch/access";
    // const endpoint = "http://139.162.232.66:9000/api/v1/upsl/process";

    const requestData = {
      data,
      extra: {
        browserColorDepth: depth,
        browserLanguage: userLang,
        browserScreenHeight: h,
        browserScreenWidth: w,
        browserTZ: offset,
        browserUserAgent: agent,
        browserJavaEnabled: java,
      },
    };

    try {
      setLoading(true);
      const response = await axios.post(endpoint, data, {
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log("data", response);
      setResponseData(response.data);
      setIsValidateOtp(true);
    } catch (error) {
      console.error("Error:", error.message);
      console.log("data error", error);
    } finally {
      setLoading(false);
      console.log("finished loading");
    }
  };

  return (
    <div className="text-center text-center mt-16">
      {!isValidateOtp ? (
        <form
          className={
            errors.pin
              ? "otp-inputs error ml-24 w-3/5"
              : "otp-inputs ml-24 w-3/5"
          }
          onSubmit={handleSubmit(initiateCardTransaction)}
        >
          <p>Kindly enter your pin to complete this transaction.</p>
          <div className="flex justify-center align-center gap-1.5 mb-4 mt-4">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
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
              text={loading ? "Loading..." : `Pay NGN ${amount}`}
              variant="tulip"
            />
          </div>
        </form>
      ) : (
        <OtpVerify response={responseData.data} />
        // isValidateOtp && <Upsl response={responseData} />
      )}
    </div>
  );
}
