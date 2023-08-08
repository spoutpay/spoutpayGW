"use client";

import { useEffect, useRef } from "react";

export default function Upsl({ response }) {
  const formRef = useRef(null);
  useEffect(() => {
    formRef.current.submit();
  }, []);

  return (
    <form
      ref={formRef}
      method="POST"
      action={response?.data.processAreq.TKKPG.Response.Refinement.AcsURL}
    >
      {/* <h1 className="text-dark">Frame</h1> */}
      <input
        name="creq"
        value={response?.data.processAreq.TKKPG.Response.Refinement.CReq}
        readOnly
        hidden
      />
      Loading...
    </form>
  );
}
