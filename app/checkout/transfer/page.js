import Button from "@/app/components/Button";

export default function Transfer() {
  return (
    <div className="flex items-center justify-center text-center">
      <div className="w-full ms-16 me-20">
        <h1 className="mt-6 mb-6 sm:text-base text-xs font-bold capitalize">
          Transfer NGN 1,000 to Spoutpay checkout
        </h1>
        <div className="bg-gray-100 p-5 text-start text-xs uppercase">
          <div>
            <h2>Bank Name</h2>
            <p className="text-sm mb-5 font-bold">Stanbic Bank</p>
          </div>
          <div>
            <h2>Account Number</h2>
            <p className="text-sm mb-5 font-bold">1234567890</p>
          </div>
          <div>
            <h2>Amount</h2>
            <p className="text-sm font-bold">NGN 1,000</p>
          </div>
        </div>
        <p className="text-center text-sm mt-2 text-slate-400 mb-12">
          Use This Account For This Transaction Only
        </p>
        <Button
          variant="transparent"
          type="submit"
          text="I Have Sent The Money"
        />
      </div>
    </div>
  );
}
