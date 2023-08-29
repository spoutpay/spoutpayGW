import Button from "@/app/components/Button";
import CustomDropdown from "@/app/components/CustomDropdown";

const options = [
  { value: "option1", label: "GTB" },
  { value: "option2", label: "First Bank" },
  { value: "option3", label: "Stanbic Bank" },
];

export default function Bank() {
  return (
    <div className="flex items-center justify-center text-center">
      <div className="w-full ms-16 me-20">
        <h1 className="mt-6 mb-6 sm:text-base text-xs font-bold capitalize">Choose Your Bank</h1>
        <CustomDropdown options={options} label="Select Bank"/>
        <Button variant="tulip" type="submit" text="Authenticate" />
      </div>
    </div>
  );
}
