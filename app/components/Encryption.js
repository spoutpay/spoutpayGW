"use client";

import CryptoJS from "crypto-js";

const Encryption = (key, plainInput) => {
  // console.log("enc key", key, plainInput)
  CryptoJS.AES.encrypt(plainInput, key, { mode: CryptoJS.mode.ECB });
};

export default Encryption;
