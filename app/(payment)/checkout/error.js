"use client";

import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();
  return (
    <div>
      This is not loading up: {error.message}
      <button onClick={() => reset()}></button>
    </div>
    // <div className="text-center mt-16">
    //   Something went wrong <br />
    //   <button
    //     className="text-blue-600"
    //     onClick={() => router.push("/checkout")}
    //   >
    //     Back to checkout page
    //   </button>
    // </div>
  );
}
