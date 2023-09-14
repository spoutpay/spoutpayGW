import { useSelector } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import CryptoJS from "crypto-js";

const SECRET_KEY = "16CharacterKey!!";

function Upsl({response}) {
  // const response = useSelector((state) => state.card.apiResponse.data);
  const [decryptedText, setDecryptedText] = useState("");
  const [encryptedVal, setEncryptedVal] = useState("");
  const formRef = useRef(null);

  console.log("res", response);
  useEffect(() => {
    const requestData = localStorage.getItem("encryptedData");

    try {
      const decryptedData = CryptoJS.AES.decrypt(
        requestData.toString(),
        SECRET_KEY,
        { mode: CryptoJS.mode.ECB }
      );

      const dataToString = decryptedData.toString(CryptoJS.enc.Utf8);
      const parsedData = JSON.parse(dataToString);
      console.log("res", response.data.OrderId);
      const combinedData = {};

      if (response && response.data) {
        combinedData.transData = parsedData;
        combinedData.orderID = response.data.OrderId;
        combinedData.sessionID = response.data.SessionId;
      }
      localStorage.setItem("encryptedData", JSON.stringify(combinedData));

      // const encryptedDataResult = CryptoJS.AES.encrypt(
      //   JSON.stringify(combinedData),
      //   SECRET_KEY,
      //   {
      //     mode: CryptoJS.mode.ECB,
      //   }
      // );
      // setEncryptedVal(encryptedDataResult.toString());
    } catch (error) {
      console.error("Error:", error);
    }

    formRef.current.submit();
  }, []);

  // localStorage.setItem("encryptedData", combinedData);

  return (
    <>
      <form
        ref={formRef}
        method="POST"
        action={response?.data?.TKKPG?.Response?.Refinement?.AcsURL}
      >
        <input
          name="creq"
          value={response?.data?.TKKPG?.Response?.Refinement?.CReq}
          readOnly
          hidden
        />
        Loading...
      </form>
    </>
  );
}

export default Upsl;
