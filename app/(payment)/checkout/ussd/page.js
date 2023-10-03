import Button from "@/app/components/Button";
import CustomDropdown from "@/app/components/CustomDropdown";

const options = [
  { value: "option1", label: "GTB" },
  { value: "option2", label: "First Bank" },
  { value: "option3", label: "Stanbic Bank" },
];

export default function Ussd() {
  return (
    <div className="flex items-center justify-center text-center">
      <div className="w-full ms-16 me-20">
        <h1 className="mt-6 mb-6 sm:text-base text-xs font-bold capitalize">
          Choose A Bank To Start The Payment
        </h1>
        <CustomDropdown options={options} label="Select Bank" />
        <div className="bg-gray-100 p-5 text-center text-xs capitalize mb-4">
          <p>Dial The Code Below To Complete</p>
          <p className="text-cyan-500 font-bold m-3">*737*33*4*660258#</p>
          <p>This Transaction With Gtbank’s 737 How To Pay With Gtbank Ussd</p>
        </div>
        <Button
          variant="transparent"
          type="submit"
          text="I Have Sent The Money"
        />
      </div>
    </div>
  );
}
