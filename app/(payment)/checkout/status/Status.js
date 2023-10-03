import Button from "@/app/components/Button";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Status({ message }) {
  const router = useRouter();

  console.log("message", message);

  useEffect(() => {
    localStorage.removeItem("encryptedData");
  });

  return (
    <div className="text-center">
      {message === "success" ? (
        <>
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
        </>
      ) : (
        <>
          <div>
            <Image
              src="/failed.svg"
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
        </>
      )}
    </div>
  );
}
