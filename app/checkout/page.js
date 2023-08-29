"use client";

import { updateCardData } from "../redux/features/cardSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
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

const inputClassNames =
  "w-full border px-2.5 pt-6 pb-2.5 rounded text-xs text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-input-focus";

const labelClassName =
  "block text-gray-700 mb-2 absolute start-2.5 top-2 text-xs uppercase";

const imageSrc = {
  Mastercard: "/master-card.png",
  Verve: "/verve.png",
  Visa: "/visa.png",
};

export default function Checkout() {
  const dispatch = useDispatch();
  const amount = 100;
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");
  const [enterPin, setEnterpin] = useState(false);

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
        return value ? isValidExpiry(value) : true; // Implement the isValidExpiry function to validate the card expiry
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

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // setCardData(data);
      dispatch(updateCardData(data));
      setEnterpin(true);
    } catch (error) {
      console.error("Payment processing error:", error);
    } finally {
      setLoading(false);
    }
  };

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
                    src={imageSrc[cardType]}
                    height={30}
                    width={50}
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
        <CardPin cardType={cardType} />
      )}
    </div>
  );
}
