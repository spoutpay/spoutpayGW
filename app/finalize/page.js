"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import { useSearchParams } from "next/navigation";
import AppData from "../config/appData.json";

export default function Finalize() {
  const router = useSearchParams();
  const param = router.get("cres");
  const SECRET_KEY = "16CharacterKey!!";

  console.log("param", param)

  const requestData = localStorage.getItem("encryptCombinedData");

  const data = JSON.parse(requestData)
   data.cres = param;
  // data["details"] = requestData;


  const postData = async () => {
    try {
      const endpoint = AppData.BASE_URL + "upsl/finalize";

      const response = await axios.post(endpoint, data);
      console.log("Request", response, data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    postData();
  }, []);


  // useEffect(() => {
  //   try {
  //     const decryptedData = CryptoJS.AES.decrypt(
  //       requestData.toString(),
  //       SECRET_KEY,
  //       { mode: CryptoJS.mode.ECB }
  //     );

  //     const dataToString = decryptedData.toString(CryptoJS.enc.Utf8);
  //     const parsedData = JSON.parse(dataToString);

  //     console.log("decrypted", parsedData)
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }, []);

  return <div>Loading...</div>;
}
