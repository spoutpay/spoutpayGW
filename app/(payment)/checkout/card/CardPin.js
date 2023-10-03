"use client";

import { useSelector, useDispatch } from "react-redux";
import { cardDataResponse } from "../../../redux/features/cardSlice";
import Button from "@/app/components/Button";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import OTPInput from "react-otp-input";
import AppData from "../../../config/appData.json";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

export default function CardPin({ customer }) {
  const router = useRouter();
  const routeParam = useSearchParams();
  const param = routeParam.get("txn_ref");
  const cardInfo = useSelector((state) => state.card.value.cardData);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const { pan, expDate, cvv } = cardInfo;
  // const [customer, setCustomer] = useState({});

  console.log("customer", customer);

  const {
    amount,
    currency,
    customer_name,
    email_address,
    phone_number,
    request_type,
    user_bear_charge,
    spout_tx_ref,
    description,
    isVisa,
  } = customer;

  const cleanedExpDate = expDate?.replace(/\s|\/+/g, "");
  const cleanedPan = pan?.replace(/\s|\/+/g, "");

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup.object().shape({
    pan: yup.string().default(cleanedPan),
    expDate: yup.string().default(cleanedExpDate),
    cvv: yup.string().default(cvv),
    pin: yup.string().required("Enter pin to continue").min(4).default(otp),
    customer_name: yup.string().default(customer_name),
    email_address: yup
      .string()
      .email("Enter a valid email address")
      .default(email_address),
    phone_number: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid!")
      .default(phone_number),
    currency: yup.string().default(currency),
    amount: yup.number().default(amount),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const initiateCardTransaction = async (requestData) => {
    const endpoint = `${AppData.BASE_URL}interswitch/access`;

    console.log("requestr data", requestData);
    try {
      setLoading(true);
      const response = await axios.post(endpoint, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(cardDataResponse(response.data));
      if (isVisa) {
        router.push("/checkout/visaverifier");
      } else {
        router.push("/checkout/otpverifier");
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" text-center mt-16">
      <form
        className={
          errors.pin ? "otp-inputs error ml-24 w-3/5" : "otp-inputs ml-24 w-3/5"
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
    </div>
  );
}
