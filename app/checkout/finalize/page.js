"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import { useSearchParams } from "next/navigation";
import AppData from "../../config/appData.json";
import Status from "../status/Status";

export default function Finalize() {
  const router = useSearchParams();
  const [isProccessed, setIsProcessed] = useState(false);
  const [processedMsg, setProcessedMsg] = useState("");
  const param = router.get("cres");
  const SECRET_KEY = "16CharacterKey!!";

  console.log("processedMsg", processedMsg, param);

  const requestData = localStorage.getItem("encryptedData");

  const data = JSON.parse(requestData);
  data.cres = param;

  const postData = async () => {
    const endpoint = AppData.BASE_URL + "upsl/finalize";

    try {
      const response = await axios.post(endpoint, data);
      console.log("res", response);
      setProcessedMsg("success");
      setIsProcessed(true);
    } catch (error) {
      console.error("Error", error);
      setProcessedMsg("failed");
      setIsProcessed(true);
    }
  };

  useEffect(() => {
    postData();
  }, []);
  

  return (
    <div className="text-center flex mt-3 justify-center items-center">
      {!isProccessed ? <p>Loading...</p> : <Status message={processedMsg} />}
    </div>
  );
}
