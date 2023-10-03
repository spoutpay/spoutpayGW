"use client";
import ButtonWithIcon from "@/app/components/Admin/ButtonWithIcon";
import Dropdown from "@/app/components/Admin/DropdownComponent";
import InputWithIcon from "@/app/components/Admin/InputWithIcon";

import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useState } from "react";
import { useTable } from "react-table";

const Disputes = () => {
  const options = [{ label: "Option 1", value: "option1" }];
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (option) => {
    setSelectedValue(option.value);
  };

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
      {" "}
      <div className="w-full bg-white py-2 px-10 items-center ">
        <div className="flex items-center gap-5">
          <Dropdown
            options={options}
            onSelect={handleSelect}
            icon={"mdi:filter"}
            className={" "}
            title={"Filter by Date"}
          />
          <Dropdown
            options={options}
            onSelect={handleSelect}
            icon={"ep:arrow-down"}
            className={""}
            title={"Log Code"}
          />
          <Dropdown
            options={options}
            onSelect={handleSelect}
            icon={"ep:arrow-down"}
            className={""}
            title={"This Month"}
          />
          <Dropdown
            options={options}
            onSelect={handleSelect}
            icon={"ep:arrow-down"}
            className={""}
            title={"Status"}
          />
          <Dropdown
            options={options}
            onSelect={handleSelect}
            icon={"ep:arrow-down"}
            className={"bg-[#F6F6F8] border border-[#D6D6D6] p-2"}
            title={"July 12, 2021 - August 10, 2021"}
          />
          <ButtonWithIcon
            icon="ic:baseline-download"
            color="#0981fd"
            size={"35"}
            className="bg-[#DDEDFF] border-2 border-[#0B80FA]"
          >
            Download Report
          </ButtonWithIcon>
        </div>

        <div className="mb-10 flex ">
          <InputWithIcon
            icon={"ri:search-line"}
            placeholder={"Search for Reference"}
            color={"#0B80FA"}
          />
        </div>
      </div>
      {/* Tables */}
      <div className="w-full mt-5 w3-container w3-responsive">
        {" "}
        <table {...getTableProps()} className="w3-table w3-bordered  ">
          <thead className="bg-[#F9FBFC]">
            {headerGroups.map((headerGroup, index) => (
              <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, idx) => (
                  <th key={idx} {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()} className="bg-white">
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
    </div>
  );
};

const columns = [
  {
    Header: <input type="checkbox" />,
    accessor: "checkbox",
    Cell: ({ row }) => <input type="checkbox" />,
  },
  {
    Header: "Ammount",
    accessor: "ammount",
  },

  {
    Header: "Log Code",
    accessor: "receipt_number",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Date Created",
    accessor: "transaction_reference",
  },

  {
    Header: "Expiry Date",
    accessor: "date",
  },
  {
    Header: "",
    accessor: "charge_back",
  },
];

const data = [
  {
    ammount: "$100.00",
    receipt_number: "12345",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#FF0027" width={25} />
        <p>Failed</p>
      </div>
    ),
    transaction_reference: "ABC123",
    date: "2023-08-13 10:00 AM",
  },
  {
    ammount: "$75.50",
    receipt_number: "54321",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#179800" width={25} />
        <p>Successful</p>
      </div>
    ),
    transaction_reference: "XYZ789",
    date: "2023-08-13 02:30 PM",
  },
  {
    ammount: "$75.50",
    receipt_number: "54321",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#179800" width={25} />
        <p>Successful</p>
      </div>
    ),
    transaction_reference: "XYZ789",
    date: "2023-08-13 02:30 PM",
  },
  {
    ammount: "$75.50",
    receipt_number: "54321",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#FF0027" width={25} />
        <p>Failed</p>
      </div>
    ),
    transaction_reference: "XYZ789",
    date: "2023-08-13 02:30 PM",
  },
  {
    ammount: "$75.50",
    receipt_number: "54321",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#FF0027" width={25} />
        <p>Failed</p>
      </div>
    ),
    transaction_reference: "XYZ789",
    date: "2023-08-13 02:30 PM",
  },
  {
    ammount: "$75.50",
    receipt_number: "54321",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#8D4511" width={25} />
        <p>Abandoned</p>
      </div>
    ),
    transaction_reference: "XYZ789",
    date: "2023-08-13 02:30 PM",
  },
  {
    ammount: "$75.50",
    receipt_number: "54321",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#8D4511" width={25} />
        <p>Abandoned</p>
      </div>
    ),
    transaction_reference: "XYZ789",
    date: "2023-08-13 02:30 PM",
  },
  {
    ammount: "$100.00",
    receipt_number: "12345",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#A40EC7" width={25} />
        <p>Reversed</p>
      </div>
    ),
    transaction_reference: "ABC123",
    date: "2023-08-13 10:00 AM",
    charge_back: (
      <Link href="/admin/charge-back">
        <button className="bg-[#FFF0E6] border border-[#AF4300] py-2 px-5 rounded-md text-[#AF4300]">
          Charge Back
        </button>
      </Link>
    ),
  },
  {
    ammount: "$75.50",
    receipt_number: "54321",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#179800" width={25} />
        <p>Successful</p>
      </div>
    ),
    transaction_reference: "XYZ789",
    date: "2023-08-13 02:30 PM",
  },
  {
    ammount: "$75.50",
    receipt_number: "54321",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#179800" width={25} />
        <p>Successful</p>
      </div>
    ),
    transaction_reference: "XYZ789",
    date: "2023-08-13 02:30 PM",
    charge_back: (
      <Link href="/admin/charge-back">
        <button className="bg-[#FFF0E6] border border-[#AF4300] py-2 px-5 rounded-md text-[#AF4300]">
          Charge Back
        </button>
      </Link>
    ),
  },
  {
    ammount: "$75.50",
    receipt_number: "54321",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#179800" width={25} />
        <p>Successful</p>
      </div>
    ),
    transaction_reference: "XYZ789",
    date: "2023-08-13 02:30 PM",
  },
  {
    ammount: "$75.50",
    receipt_number: "54321",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#FF0027" width={25} />
        <p>Failed</p>
      </div>
    ),
    transaction_reference: "XYZ789",
    date: "2023-08-13 02:30 PM",
    charge_back: (
      <Link href="/admin/charge-back">
        <button className="bg-[#FFF0E6] border border-[#AF4300] py-2 px-5 rounded-md text-[#AF4300]">
          Charge Back
        </button>
      </Link>
    ),
  },
  {
    ammount: "$75.50",
    receipt_number: "54321",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#FF0027" width={25} />
        <p>Failed</p>
      </div>
    ),
    transaction_reference: "XYZ789",
    date: "2023-08-13 02:30 PM",
  },
  {
    ammount: "$75.50",
    receipt_number: "54321",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#A40EC7" width={25} />
        <p>Reversed</p>
      </div>
    ),
    transaction_reference: "XYZ789",
    date: "2023-08-13 02:30 PM",
  },
];
export default Disputes;
