"use client";

import Button from "@/app/components/Button";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import OTPInput from "react-otp-input";
import AppData from "../../config/appData.json";
import axios from "axios";
import OtpVerification from "@/app/components/OtpVerification";

function VerifyPin() {
  const amount = "80";
  const [otp, setOtp] = useState("");
  const [cardData, setCardData] = useState({});
  const [isValidateOtp, setIsValidateOtp] = useState(false);
  const [responseData, setResponseData] = useState({});
  const { pan, expDate, cvv } = cardData;
  const email = "onomeofogba@gmail.com";
  const phoneNum = "08103327651";
  const currency = "NGN";
  const name = "Onome Ofogba";

  const cleanedExpDate = expDate?.replace(/\s|\/+/g, "");
  const cleanedPan = pan?.replace(/\s|\/+/g, "");

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup.object().shape({
    pan: yup.string().default(cleanedPan),
    expDate: yup.string().default(cleanedExpDate),
    cvv: yup.string().default(cvv),
    pin: yup.string().required("Enter pin to continue").default(otp),
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
    console.log("data", data);
    const endpoint = AppData.BASE_URL + "interswitch/access";

    try {
      const response = await axios.post(endpoint, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("result0", response.data);
      setResponseData(response.data);
      // localStorage.removeItem("paymentData");
      setIsValidateOtp(true);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="text-center text-center mt-16 ml-7">
      {!isValidateOtp ? (
        <form
          className="otp-inputs mt-6 ml-14 w-3/5"
          onSubmit={handleSubmit(initiateCardTransaction)}
        >
          <p>
            Kindly enter your pin to complete this transaction.
          </p>
          <div className="flex justify-center align-center ml-2 mb-4 mt-4">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span> </span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div>
            <Button text={`Pay NGN ${amount}`} variant="tulip" />
          </div>
        </form>
      ) : (
        <OtpVerification response={responseData.data} />
      )}
    </div>
  );
}

export default VerifyPin;
