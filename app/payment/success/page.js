import Link from "next/link";

function Success() {
  return (
    <div className="text-center">
      <div className="text-blue-600 cursor-pointer flex align-end">
        <Link href={"/payment"}>Back to home</Link>
      </div>
      <h1 className="mt-16">Transaction Successful</h1>
    </div>
  );
}

export default Success;
