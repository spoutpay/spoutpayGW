"use client";
import ButtonWithIcon from "@/app/components/Admin/ButtonWithIcon";
import Dropdown from "@/app/components/Admin/DropdownComponent";
import InputWithIcon from "@/app/components/Admin/InputWithIcon";
import React, { useState } from "react";
import { useTable } from "react-table";

const Transaction = () => {
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
    <div className="">
      {" "}
      <div className="w-full bg-white h-20 px-10 flex justify-between items-center my-3">
        <div className="flex items-center gap-5">
          <Dropdown
            options={options}
            onSelect={handleSelect}
            icon={"mdi:filter"}
            className={"text-[#0981FD] "}
            title={"Filter by Status"}
          />
          <Dropdown
            options={options}
            onSelect={handleSelect}
            icon={"ep:arrow-down"}
            className={""}
            title={"All Account"}
          />
          <Dropdown
            options={options}
            onSelect={handleSelect}
            icon={"ep:arrow-down"}
            className={""}
            title={"This Month"}
          />
          <InputWithIcon
            icon={"material-symbols:search"}
            placeholder="Search for reference"
            color={"#0B80FA"}
          />
        </div>
        <div>
          <ButtonWithIcon
            icon="ic:baseline-download"
            color="#0981fd"
            size={"35"}
            className="bg-[#DDEDFF] border-2 border-[#0B80FA]"
          >
            Download Report
          </ButtonWithIcon>
        </div>
      </div>
      {/* Table */}
      <div className="w-full w3-container w3-responsive">
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
    Header: "Customer Id/Email",
    accessor: "customer_id",
  },
  {
    Header: "Channel",
    accessor: "channel",
  },
  {
    Header: "Ammount",
    accessor: "ammount",
  },
  {
    Header: "Receipt Number",
    accessor: "receipt_number",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Payment Page",
    accessor: "payment_page",
  },
  {
    Header: "Terminal ID",
    accessor: "terminal_id",
  },
  {
    Header: "Data and Time",
    accessor: "date",
  },
  {
    Header: "Download",
    accessor: "download",
  },
];

const data = [
  {
    customer_id: "customer1@example.com",
    channel: "Online",
    ammount: "$100",
    receipt_number: "12345",
    status: "Completed",
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-13 10:00 AM",
    download: "Link1",
  },
  {
    customer_id: "customer2@example.com",
    channel: "In-Store",
    ammount: "$50",
    receipt_number: "67890",
    status: "Pending",
    payment_page: "PaymentPage2",
    terminal_id: "T234",
    date: "2023-08-13 02:30 PM",
    download: "Link2",
  },
  {
    customer_id: "customer3@example.com",
    channel: "Online",
    ammount: "$200",
    receipt_number: "54321",
    status: "Completed",
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-14 09:15 AM",
    download: "Link3",
  },
  {
    customer_id: "customer4@example.com",
    channel: "In-Store",
    ammount: "$75",
    receipt_number: "98765",
    status: "Pending",
    payment_page: "PaymentPage2",
    terminal_id: "T234",
    date: "2023-08-15 03:45 PM",
    download: "Link4",
  },
  {
    customer_id: "customer5@example.com",
    channel: "Online",
    ammount: "$150",
    receipt_number: "56789",
    status: "Completed",
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-16 11:30 AM",
    download: "Link5",
  },
  {
    customer_id: "customer1@example.com",
    channel: "Online",
    ammount: "$100",
    receipt_number: "12345",
    status: "Completed",
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-13 10:00 AM",
    download: "Link1",
  },
  {
    customer_id: "customer2@example.com",
    channel: "In-Store",
    ammount: "$50",
    receipt_number: "67890",
    status: "Pending",
    payment_page: "PaymentPage2",
    terminal_id: "T234",
    date: "2023-08-13 02:30 PM",
    download: "Link2",
  },
  {
    customer_id: "customer3@example.com",
    channel: "Online",
    ammount: "$200",
    receipt_number: "54321",
    status: "Completed",
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-14 09:15 AM",
    download: "Link3",
  },
  {
    customer_id: "customer4@example.com",
    channel: "In-Store",
    ammount: "$75",
    receipt_number: "98765",
    status: "Pending",
    payment_page: "PaymentPage2",
    terminal_id: "T234",
    date: "2023-08-15 03:45 PM",
    download: "Link4",
  },
  {
    customer_id: "customer5@example.com",
    channel: "Online",
    ammount: "$150",
    receipt_number: "56789",
    status: "Completed",
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-16 11:30 AM",
    download: "Link5",
  },
  {
    customer_id: "customer1@example.com",
    channel: "Online",
    ammount: "$100",
    receipt_number: "12345",
    status: "Completed",
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-13 10:00 AM",
    download: "Link1",
  },
  {
    customer_id: "customer2@example.com",
    channel: "In-Store",
    ammount: "$50",
    receipt_number: "67890",
    status: "Pending",
    payment_page: "PaymentPage2",
    terminal_id: "T234",
    date: "2023-08-13 02:30 PM",
    download: "Link2",
  },
  {
    customer_id: "customer3@example.com",
    channel: "Online",
    ammount: "$200",
    receipt_number: "54321",
    status: "Completed",
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-14 09:15 AM",
    download: "Link3",
  },
  {
    customer_id: "customer4@example.com",
    channel: "In-Store",
    ammount: "$75",
    receipt_number: "98765",
    status: "Pending",
    payment_page: "PaymentPage2",
    terminal_id: "T234",
    date: "2023-08-15 03:45 PM",
    download: "Link4",
  },
  {
    customer_id: "customer5@example.com",
    channel: "Online",
    ammount: "$150",
    receipt_number: "56789",
    status: "Completed",
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-16 11:30 AM",
    download: "Link5",
  },
];
export default Transaction;
