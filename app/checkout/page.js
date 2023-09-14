"use client"

// Constants
const CARD_TYPES = {
  Mastercard: "/master-card.png",
  Verve: "/verve.png",
  Visa: "/visa.png",
};

import { updateCardData } from "../redux/features/cardSlice";
import { updateSwitchConfig } from "../redux/features/switchSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  formatCardNumber,
  isValidCardNumber,
  getCardType,
} from "@/app/utils/CardNumberUtils";
import isValidExpiry from "@/app/utils/ValidateExpiryDate";
import Image from "next/image";
import Button from "@/app/components/Button";
import CardPin from "./card/CardPin";
import AppData from "../config/appData.json";
import axios from "axios";
import Upsl from "./card/Upsl";
import CryptoJS from "crypto-js";

const inputClassNames =
  "w-full border px-2.5 pt-6 pb-2.5 rounded text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-input-focus";

const labelClassName =
  "block text-gray-700 mb-2 absolute start-2.5 top-2 text-xs uppercase";

export default function Checkout() {
  const dispatch = useDispatch();
  const switchName = useSelector((state) => state?.switch?.value?.switchConfig);
  const amount = 100;
  const [loading, setLoading] = useState(false);
  const [isValidateOtp, setIsValidateOtp] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");
  const [enterPin, setEnterpin] = useState(false);
  const router = useRouter();

  const [encryptedText, setEncryptedText] = useState("");
  const secretKey = "16CharacterKey!!";

  const getSwitchConfig = async () => {
    try {
      const endpoint = `${AppData.BASE_URL}settings/switch`;
      const response = await axios.get(endpoint, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(updateSwitchConfig(response.data.data.name));
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleCardNumberChange = (event) => {
    const formattedValue = formatCardNumber(event.target.value);
    const cardType = getCardType(formattedValue);
    setCardType(cardType);

    let maxLength;
    if (cardType === "mastercard") {
      maxLength = 19;
    } else if (cardType === "Verve") {
      maxLength = 23;
    } else {
      maxLength = 19;
    }

    setCardNumber(formattedValue.slice(0, maxLength));
  };

  const PaymentSchema = yup.object().shape({
    pan: yup
      .string()
      .required("Card number is required")
      .test("valid-card", "Invalid card number", (cardNumber) => {
        return cardNumber ? isValidCardNumber(cardNumber) : true;
      })
      .default(cardNumber),
    expDate: yup
      .string()
      .required("Card expiry is required")
      .test("valid-expiry", "Invalid card expiry", (value) => {
        return value ? isValidExpiry(value) : true;
      }),
    cvv: yup
      .string()
      .required("CVV is required")
      .matches(/^\d{3}$/, "Invalid CVV (must be 3 digits)"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PaymentSchema),
  });

  const submitUpslData = async (data) => {
    console.log("upsl data", data)
    const endpoint = `${AppData.BASE_URL}upsl/process`;
    let offset = new Date().getTimezoneOffset();
    let w = window.innerWidth;
    let h = window.innerHeight;
    let userLang = navigator.language;
    let depth = screen.colorDepth;
    let agent = navigator.userAgent;
    let java = navigator.javaEnabled();
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

      const encryptedDataResult = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        secretKey,
        {
          mode: CryptoJS.mode.ECB,
        }
      );
      setEncryptedText(encryptedDataResult.toString());

      const response = await axios.post(endpoint, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch(updateCardData(response.data));
      console.log("response data", response.data)
      setResponseData(response.data);
      setEnterpin(true);
    } catch (error) {
      console.error("Error while processing UPSL data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const submitISWData = async (data) => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      dispatch(updateCardData(data));
      setEnterpin(true);
    } catch (error) {
      console.error("Error while processing other data:", error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    if (switchName === "upsl") {
      await submitUpslData(data);
    } else {
      await submitISWData(data);
    }
  };

  useEffect(() => {
    getSwitchConfig();
  }, []);

  useEffect(() => {
    localStorage.setItem("encryptedData", encryptedText);
  }, [encryptedText]);

  return (
    <div className="flex item-center text-center justify-center mt-8">
      {!enterPin ? (
        <form className="w-100 mx-10" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="sm:text-base text-xs font-bold mb-6 capitalize">
            Enter your card details to pay
          </h1>
          <div className="flex flex-wrap">
            <div className="w-full mb-2.5 relative">
              <label className={labelClassName}>Card number</label>
              {cardType && cardType !== "Unknown" && (
                <div className="absolute top-4 right-4">
                  <Image
                    src={CARD_TYPES[cardType]}
                    height="30"
                    width="50"
                    alt="card"
                  />
                </div>
              )}
              <input
                type="text"
                name="pan"
                placeholder="0000 0000 0000 0000"
                className={`${inputClassNames} ${
                  errors.pan ? "border-red-200" : ""
                }`}
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
              {errors.pan && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.pan.message}
                </p>
              )}
            </div>
            <div className="w-full flex flex-wrap">
              <div className="w-1/2 mb-2.5 relative pr-1">
                <label className={labelClassName}>Card expiry</label>
                <input
                  type="text"
                  name="expDate"
                  placeholder="YY / MM"
                  className={`${inputClassNames} ${
                    errors.expDate ? "border-red-200" : ""
                  }`}
                  {...register("expDate")}
                />
                {errors.expDate && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {errors.expDate.message}
                  </p>
                )}
              </div>
              <div className="w-1/2 mb-2.5 relative pl-1">
                <label className={labelClassName}>CVV</label>
                <input
                  type="text"
                  name="cvv"
                  placeholder="123"
                  className={`${inputClassNames} ${
                    errors.cvv ? "border-red-200" : ""
                  }`}
                  {...register("cvv")}
                />
                {errors.cvv && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {errors.cvv.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <Button
            text={loading ? "Loading..." : `Pay NGN ${amount}`}
            variant="tulip"
            type="submit"
            disabled={loading}
          />
        </form>
      ) : (
        <>
          {switchName === "upsl" ? <Upsl response={responseData} /> : <CardPin cardType={cardType} />}
        </>
      )}
    </div>
  );
}