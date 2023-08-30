"use client";

import CryptoJS from "crypto-js";

const Decryption = (key, encryptedData) => {
  CryptoJS.AES.decrypt(encryptedData.toString(), key, { mode: CryptoJS.mode.ECB });
};

export default Decryption;

function encryptWithKey(plaintext, key){
  var encrypted = CryptoJS.AES.encrypt(plaintext, key, { mode: CryptoJS.mode.ECB });
  console.log("Ciphertext (Base64):\n" + encrypted.toString());        // Ciphertext
  var decrypted = CryptoJS.AES.decrypt(encrypted.toString(), key, { mode: CryptoJS.mode.ECB });
  console.log("Decrypted:\n" + decrypted.toString(CryptoJS.enc.Utf8)); // Plaintext
}