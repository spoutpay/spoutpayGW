"use client";

import { useEffect, useRef } from "react";

export default function Upsl({response}) {
  const formRef = useRef(null);

  console.log("res", response)
//   useEffect(() => {
//     formRef.current.submit();
//   }, []);

  return (
    <form
    //   ref={formRef}
      method="POST"
      action="https://secure-acs2ui-b1-indmum-mumrdc.wibmo.com/v1/acs/services/browser/creq/L/8528/147898fc-2c69-11ee-8ead-757d7f1abb3c"
    >
      <h1 className="text-dark">Frame</h1>
      <input
        name="creq"
        value={
          "eyJhY3NUcmFuc0lEIjoiMTQ3ODk4ZmMtMmM2OS0xMWVlLThlYWQtNzU3ZDdmMWFiYjNjIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiJjMjU1NjljNi0zYjM0LTQyMTctOGM0Ny0zYjVjNTkyNWI2MjgiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDUiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0"
        }
        readOnly
      />
    </form>
  );
}
