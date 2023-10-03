"use client";

import Button from "@/app/components/Button";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("encryptedData");
  });
  return (
    <div className="mt-4 flex justify-center items-center">
      <div>
        <div>
          <Image
            src="/success.svg"
            height="0"
            width="0"
            alt="success"
            style={{ width: "250px", height: "250px" }}
          />
        </div>
        <div className="mt-6">
          <Button
            text="Done"
            variant="tulip"
            onClick={() => router.push("/checkout")}
          />
        </div>
      </div>
    </div>
  );
}
