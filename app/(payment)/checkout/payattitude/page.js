import Button from "@/app/components/Button";
import Image from "next/image";

export default function PayAttitude() {
  return (
    <div className="flex items-center justify-center text-center">
      <div className="w-full ms-16 me-20">
        <h1 className="mt-6 mb-6 sm:text-base text-xs font-bold capitalize">
          Please Enter Your Registered Phone Number To Start This Payment
        </h1>
        <div className="mb-3">
          <input
            className="p-2 w-full focus:outline-sky-300 border"
            type="text"
            placeholder="0000 000 0000"
          />
          {/* <Image /> */}
        </div>
        <Button variant="tulip" type="submit" text="Continue" />
      </div>
    </div>
  );
}
