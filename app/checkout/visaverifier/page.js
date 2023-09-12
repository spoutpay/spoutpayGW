"use client";

import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

export default function VisaVerifier() {
  const response = useSelector((state) => state.card.apiResponse.data);
  const formRef = useRef(null);
  useEffect(() => {
    // console.log("in useState", response);
    formRef.current.submit();
  }, []);

  // console.log("asdfaasdg", response.jwt, response.MD);
  return (
    <form ref={formRef} method="POST" action={response.AcsURL}>
      {/* <h1 className="text-dark">Frame</h1> */}
      <input name="creq" value={response.jwt} readOnly hidden />
      <input type="text" name="MD" value={response.MD} readOnly hidden />
      Loading...
    </form>
  );
}
