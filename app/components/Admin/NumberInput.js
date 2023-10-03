import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const NumberInput = ({ inputClassName }) => {
  const [phone, setPhone] = useState("");

  return (
    <div>
      <PhoneInput
        defaultCountry="ng"
        value={phone}
        onChange={(phone) => setPhone(phone)}
        inputClassName={inputClassName}
        className="py-2"
      />
    </div>
  );
};

export default NumberInput;
