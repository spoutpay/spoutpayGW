"use client";
import React, { useEffect, useState } from "react";

import ButtonWithIcon from "../ButtonWithIcon";
import AppData from "../../../config/appData.json";

import axios from "axios";
import { Icon } from "@iconify/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../InputField";
import { useForm } from "react-hook-form";
import CustomDropdown from "../../CustomDropdown";
import BankDropdown from "../BankDropdown";
import Toast from "../../Toast";

const SettlementAccounts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [toastInfo, setToastInfo] = useState(null);
  const closeToast = () => {
    setToastInfo(null);
  };
  const schema = yup.object().shape({
    country: yup.string().required("country  is required!"),
    currency: yup.string().required("currency is required!"),
    bank_code: yup.string().required("bank code is required!"),
    account_number: yup.string().required("account number is required!"),
  });

  const token = localStorage.getItem("token");
  const [accounts, setAccounts] = useState("");
  console.log(accounts?.data?.data);
  const data = accounts.data?.data;

  const handleAccounts = async (requestData) => {
    try {
      const endpoint = `${AppData.BASE_URL}settings/settlement-accounts`;
      const response = await axios.post(endpoint, requestData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      onClose();
      setToastInfo({ message: response?.data?.data?.message, type: "success" });
    } catch (error) {
      console.log("Error", error);
      // setMessage(error.response?.data?.error || "An error occurred");
      setToastInfo({ message: "Error making the API call", type: "error" });
    }
  };

  useEffect(() => {
    axios
      .get(`${AppData.BASE_URL}settings/all-settlement-accounts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setAccounts(response);
      })
      .catch(function (error) {});
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="mt-5">
      <div className="flex justify-end">
        <ButtonWithIcon
          icon="majesticons:plus"
          color="white"
          size={"30"}
          className="bg-black text-white"
          onClick={onOpen}
        >
          Add Settlement Account
        </ButtonWithIcon>
      </div>
      <div className="mt-5">
        <p>Settlements Account - 1</p>
        <div className="w-full  w3-responsive">
          {" "}
          <table className="w3-table w3-bordered  ">
            <thead className="bg-[#F9FBFC]">
              <tr>
                {columns.map((i, idx) => (
                  <th key={idx}>{i.Header}</th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white">
              {data?.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.bank_code}</td>
                  <td>{item.account_number}</td>
                  <td>{item.currency}</td>
                  <div className="flex items-center ">
                    <button className="text-[#D60000] text-xs">Delete</button>{" "}
                    <Icon icon="ph:dot" color="#cbcbcb" width={40} />
                    <button className="text-xs">Edit</button>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Settlement Account</ModalHeader>

          <form action="" onSubmit={handleSubmit(handleAccounts)}>
            <ModalBody>
              <label htmlFor="" className="text-sm">
                Country
              </label>

              <InputField
                type="text"
                id="country"
                placeholder="Country"
                wrapClass="relative mt-3 mb-3 w-100"
                name="country"
                register={register}
              />

              {/* <CustomDropdown
                label={""}
               
                register={register}
              /> */}
              <CustomDropdown
                options={[{ label: "NGN", value: "NGN" }]}
                register={register}
                setValue={setValue}
                name={"currency"}
              />
              <BankDropdown
                register={register}
                setValue={setValue}
                name={"bank_code"}
              />
              <InputField
                type="text"
                id="account_number"
                placeholder="Account Number"
                wrapClass=" mt-3 mb-3 w-100"
                name="account_number"
                register={register}
              />
            </ModalBody>

            <div className="flex justify-center gap-2  mt-5 mb-16">
              <button
                type="button"
                className="border border-black py-2 px-5 rounded-sm"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-black py-2 px-5 text-white rounded-sm"
              >
                Add Account
              </button>
            </div>
          </form>
        </ModalContent>
      </Modal>
      {toastInfo && (
        <Toast
          message={toastInfo.message}
          type={toastInfo.type}
          onClose={closeToast}
        />
      )}
    </div>
  );
};

const columns = [
  {
    Header: "Bank Name",
    accessor: "bank_name",
  },

  {
    Header: "Account Number",
    accessor: "account_number",
  },
  {
    Header: "Currency",
    accessor: "currency",
  },
  {
    accessor: "button",
  },
];

export default SettlementAccounts;
