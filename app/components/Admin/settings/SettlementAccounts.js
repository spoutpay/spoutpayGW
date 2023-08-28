"use client";
import React, { useState } from "react";
import { useTable } from "react-table";
import ButtonWithIcon from "../ButtonWithIcon";
import { Icon } from "@iconify/react";
import Modal from "../Modal";

const SettlementAccounts = () => {
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
    <div className="mt-5">
      <div className="flex justify-end">
        <ButtonWithIcon
          icon="majesticons:plus"
          color="white"
          size={"30"}
          className="bg-black text-white"
          // onClick={() => setShowModal(true)}
        >
          Add Settlement Account
        </ButtonWithIcon>
      </div>
      <div className="mt-5">
        <p>Settlements Account - 1</p>
        <div className="w-full  w3-responsive">
          {" "}
          <table {...getTableProps()} className="w3-table w3-bordered  ">
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
    </div>
  );
};

const columns = [
  {
    Header: "Bank Name",
    accessor: "bank_name",
  },

  {
    Header: "Account Number",
    accessor: "account_number",
  },
  {
    Header: "Currency",
    accessor: "currency",
  },
  {
    accessor: "button",
  },
];

const data = [
  {
    bank_name: (
      <>
        <p className="text-xs">Sterling Bank</p> <p>SANUSI, T SEGUN</p>{" "}
      </>
    ),
    account_number: "13731636832",
    link_type: "Single Charge",
    currency: "NGN",
    button: (
      <>
        <div className="flex items-center ">
          <button className="text-[#D60000] text-xs">Delete</button>{" "}
          <Icon icon="ph:dot" color="#cbcbcb" width={40} />
          <button className="text-xs">Edit</button>
        </div>
      </>
    ),
  },
];

export default SettlementAccounts;
