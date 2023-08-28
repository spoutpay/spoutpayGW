import React from "react";
import { useTable } from "react-table";
import ButtonWithIcon from "../ButtonWithIcon";
import { useRouter } from "next/navigation";

const TeamMembers = () => {
  const router = useRouter();
  const {
    getTableProps,
    getTableBodyProps,
    getToggleRowSelectedProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
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
            <table {...getTableProps()} className="w3-table    ">
              <thead className="bg-[#F9FBFC]">
                {headerGroups.map((headerGroup, index) => (
                  <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column, idx) => (
                      <th
                        key={idx}
                        {...column.getHeaderProps()}
                        className="text-sm font-light"
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody
                {...getTableBodyProps()}
                className="bg-white border-b border-black "
              >
                {rows.map((row, id) => {
                  prepareRow(row);
                  return (
                    <tr key={id} {...row.getRowProps()}>
                      {row.cells.map((cell, index) => {
                        return (
                          <td key={index} {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
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
    accessor: "full_name",
  },

  {
    Header: "Email Address",
    accessor: "email_address",
  },
  {
    Header: "Roles",
    accessor: "roles",
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
