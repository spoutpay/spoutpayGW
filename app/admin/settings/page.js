"use client";
import BusinessPreferences from "@/app/components/Admin/settings/BusinessPreferences";
import Developers from "@/app/components/Admin/settings/Developers";
import Profile from "@/app/components/Admin/settings/Profile";
import SetPermissions from "@/app/components/Admin/settings/SetPermissions";
import SettlementAccounts from "@/app/components/Admin/settings/SettlementAccounts";
import TeamMembers from "@/app/components/Admin/settings/TeamMembers";
import WhitelistedAddresses from "@/app/components/Admin/settings/WhitelistedAddresses";
import React, { useState } from "react";

const Settings = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const SettingsComponent = () => {
    switch (currentScreen) {
      case 1:
        return <Profile />;
      case 2:
        return <BusinessPreferences />;
      case 3:
        return <SettlementAccounts />;
      case 4:
        return <TeamMembers />;
      case 5:
        return <SetPermissions />;
      case 6:
        return <WhitelistedAddresses />;
      case 7:
        return <Developers />;
      default:
        return <Profile />;
    }
  };
  return (
    <div className="bg-white">
      <ul className="flex gap-5 text-[#7E7E7E] cursor-pointer items-center mx-10 pt-10 border border-b-[#7E7E7E] border-t-0 border-r-0 border-l-0">
        <li
          onClick={() => setCurrentScreen(1)}
          className={`${currentScreen == 1 ? " text-black font-bold " : ""}`}
        >
          Profile
        </li>
        <li
          className={`${currentScreen == 2 ? " text-black font-bold " : ""}`}
          onClick={() => setCurrentScreen(2)}
        >
          Business Preference
        </li>
        <li
          onClick={() => setCurrentScreen(3)}
          className={`${currentScreen == 3 ? " text-black font-bold " : ""}`}
        >
          Settlements Accounts
        </li>
        <li
          onClick={() => setCurrentScreen(4)}
          className={`${currentScreen == 4 ? " text-black font-bold " : ""}`}
        >
          Team Members
        </li>
        <li
          onClick={() => setCurrentScreen(5)}
          className={`${currentScreen == 5 ? " text-black font-bold " : ""}`}
        >
          Set Permissions
        </li>
        <li
          onClick={() => setCurrentScreen(6)}
          className={`${currentScreen == 6 ? " text-black font-bold " : ""}`}
        >
          Whitelisted Address
        </li>
        <li
          onClick={() => setCurrentScreen(7)}
          className={`${currentScreen == 7 ? " text-black font-bold " : ""}`}
        >
          Developers
        </li>
      </ul>
      <div className="px-10">{SettingsComponent()}</div>
    </div>
  );
};

export default Settings;
