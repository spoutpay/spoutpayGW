"use client";
import Dropdown from "@/app/components/Admin/DropdownComponent";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useTable } from "react-table";

const Refunds = () => {
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
    <div className="bg-white">
      <div className="w-full justify-between flex p-5 px-10 ">
        <div className="flex items-center gap-3">
          <div className="bg-[#E4FFF4] py-5 w-[250px] flex  justify-center rounded-md">
            <div>
              <span className="flex items-center gap-3 ">
                <p className="rounded-full p-2 bg-white">
                  <Icon
                    icon="icon-park-solid:success"
                    width="25"
                    color="#16B76B"
                  />
                </p>
                <p>Total Refund</p>
              </span>
              <p className="text-center text-2xl mt-5">N124.5M</p>
            </div>
          </div>
          <div className="bg-[#FFF7F2]  p-5  w-[250px] flex justify-center rounded-md">
            <div>
              <span className="flex items-center gap-3 ">
                <p className="rounded-full p-2 bg-white">
                  <Icon
                    icon="mdi:clock-time-seven"
                    color="#f69008"
                    width="24"
                  />
                </p>
                <p>Completed Payments</p>
              </span>
              <p className="text-center text-2xl mt-5">N124.5M</p>
            </div>
          </div>
        </div>
        <div className="flex items-center text-xs">
          <div className="flex items-center gap-5">
            <Dropdown
              options={options}
              onSelect={handleSelect}
              icon={"mdi:filter"}
              className={""}
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
              leftIcon={"uis:calender"}
              className={"bg-[#F6F6F8] border border-[#D6D6D6] p-2"}
              title={"July 12, 2021 - August 10, 2021"}
            />
          </div>
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
    Header: "Receipt Number",
    accessor: "receipt_number",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Transaction Reference",
    accessor: "transaction_reference",
  },

  {
    Header: "Data and Time",
    accessor: "date",
  },
];

const data = [
  {
    ammount: "$100.00",
    receipt_number: "12345",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#179800" width={25} />
        <p>Successful</p>
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
        <Icon icon="radix-icons:dot-filled" color="#A40EC7" width={25} />
        <p>Reversed</p>
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
        <Icon icon="radix-icons:dot-filled" color="#179800" width={25} />
        <p>Successful</p>
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
];
export default Refunds;
