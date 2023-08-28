"use client";
import React, { useState } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";

const CountryDropdown = ({ className }) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const selectCountryHandler = (value) => setSelectedCountry(value);

  // Have to register the languages you want to use
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);
  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  return (
    <div>
      <select
        name=""
        id=""
        value={selectedCountry}
        className={className}
        onChange={(e) => selectCountryHandler(e.target.value)}
      >
        <option value="">Select Country</option>
        {!!countryArr?.length &&
          countryArr.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CountryDropdown;
