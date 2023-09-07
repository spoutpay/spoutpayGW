"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import ButtonWithIcon from "../ButtonWithIcon";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import AppData from "../../../config/appData.json";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../InputField";
import Toast from "../../Toast";

const WhitelistedAddresses = () => {
  const [message, setMessage] = useState("");
  const [toastInfo, setToastInfo] = useState(null);
  const [ipData, setIpData] = useState("");

  const closeToast = () => {
    setToastInfo(null);
  };
  const data = ipData?.data?.data?.allow_ip;

  const token = localStorage.getItem("token");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const schema = yup.object().shape({
    ip: yup.string().required("country Ip address is required!"),
  });

  const handleIp = async (requestData) => {
    try {
      const endpoint = `${AppData.BASE_URL}settings/whitelist-ip`;
      const response = await axios.post(endpoint, requestData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      onClose();
      setToastInfo({ message: response?.data?.data?.message, type: "success" });
    } catch (error) {
      console.log("Error", error);
      setMessage(error.response?.data?.error || "An error occurred");
      setToastInfo({ message: "Error making the API call", type: "error" });
    }
  };

  useEffect(() => {
    axios
      .get(`${AppData.BASE_URL}settings/whitelist-ip`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setIpData(response);
      })
      .catch(function (error) {});
    console.log("ran");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <div className="flex justify-end mt-5" onClick={onOpen}>
        <ButtonWithIcon
          icon="majesticons:plus"
          color="white"
          size={"30"}
          className="bg-black text-white"
        >
          Add Whitelist IP
        </ButtonWithIcon>
      </div>
      <div className="mt-5">
        <p>Number of Whitelisted IP - 1</p>
        <div className="flex">
          <div className=" w-1/2 w3-responsive">
            {" "}
            <table className="w3-table    ">
              <thead className="bg-[#F9FBFC]">
                <th>Ip</th>
              </thead>

              <tbody>
                {data?.map((item, idx) => (
                  <td key={idx}>{item}</td>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#F8FBFC] h-9 w-1/2"></div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Ip Address</ModalHeader>

          <form action="" onSubmit={handleSubmit(handleIp)}>
            <ModalBody>
              <label htmlFor="" className="text-sm">
                Country
              </label>
              {message && (
                <small className="mt-3 mb-3 text-red-500">{message}</small>
              )}
              <InputField
                type="text"
                placeholder="00.00.00.00"
                wrapClass="relative mt-3 mb-3 w-100"
                name="ip"
                register={register}
                error={errors.ip?.message}
              />

              {/* <input
                type="text"
                name=""
                id=""
                className="w-full border border-[#707070] px-5 py-4 "
              /> */}
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
                Add IP
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

// const data = [
//   {
//     allow_ip: "00.00.00.00.00.00",
//   },
// ];
export default WhitelistedAddresses;
