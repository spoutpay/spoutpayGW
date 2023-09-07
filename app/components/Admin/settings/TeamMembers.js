import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import ButtonWithIcon from "../ButtonWithIcon";
import { useRouter } from "next/navigation";
import AppData from "../../../config/appData.json";

import axios from "axios";

const TeamMembers = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [toastInfo, setToastInfo] = useState(null);
  const [teamMembers, setTeamMembers] = useState();
  const token = localStorage.getItem("token");
  console.log(teamMembers?.data?.data);
  const data = teamMembers?.data?.data;

  useEffect(() => {
    axios
      .get(`${AppData.BASE_URL}settings/all-members`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setTeamMembers(response);
      })
      .catch(function (error) {});
    console.log("ran");
  }, []);
  return (
    <div>
      <div className="flex justify-end mt-5">
        <ButtonWithIcon
          icon="majesticons:plus"
          color="white"
          size={"30"}
          className="bg-black text-white"
          onClick={() => router.push("/admin/settings/new-members")}
        >
          Invite New Members
        </ButtonWithIcon>
      </div>
      <div className="mt-5">
        <p>Team Members - 1</p>
        <div className="flex">
          <div className=" w-1/2 w3-responsive">
            {" "}
            <table className="w3-table    ">
              <thead className="bg-[#F9FBFC]">
                <tr>
                  {columns.map((item, idx) => (
                    <th key={idx}> {item.Header}</th>
                  ))}
                </tr>
              </thead>

              <tbody className="bg-white border-b border-black ">
                {data?.map((item, idx) => (
                  <tr key={idx}>
                    <td>Namaa</td>
                    <td>{item.email}</td>
                    <td className="">
                    <p className="bg-[#D1E4F8CB] text-[#0981FD]  py-1 text-center rounded-md"> {item.role}</p>
    
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#F8FBFC] h-9 w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

const columns = [
  {
    Header: "Full Name",
  },

  {
    Header: "Email Address",
  },
  {
    Header: "Roles",
  },
];

const data = [
  {
    full_name: "Sanusi, T Segun",
    email_address: "example@gmail.com",
    roles: (
      <p className="bg-[#D1E4F8CB] text-[#0981FD]  py-1 text-center rounded-md">
        Owner
      </p>
    ),
  },
];

export default TeamMembers;
