import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export default function Status({ message }) {
  const router = useRouter();

  return (
    <div className="text-center">
      {message === "success" ? (
        <>
          <div>
            <Image src="/success.svg" height={250} width={250} alt="success" />
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
            <Image src="/failed.svg" height={250} width={250} alt="success" />
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
