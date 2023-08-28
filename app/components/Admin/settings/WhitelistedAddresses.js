"use client";
import React from "react";
import { useTable } from "react-table";
import ButtonWithIcon from "../ButtonWithIcon";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
} from "@chakra-ui/react";

const WhitelistedAddresses = () => {
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <div className="flex justify-end mt-5" onClick={onOpen}>
        <ButtonWithIcon
          icon="majesticons:plus"
          color="white"
          size={"30"}
          className="bg-black text-white"
        >
          Add Whitelist IP
        </ButtonWithIcon>
      </div>
      <div className="mt-5">
        <p>Number of Whitelisted IP - 1</p>
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
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Ip Address</ModalHeader>

          <ModalBody>
            <label htmlFor="" className="text-sm">
              Country
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-full border border-[#707070] px-5 py-4 "
            />
          </ModalBody>

          <div className="flex justify-center gap-2  mt-5 mb-16">
            <button
              type="button"
              className="border border-black py-2 px-5 rounded-sm"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="bg-black py-2 px-5 text-white rounded-sm">
              Add IP
            </button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

const columns = [
  {
    Header: "IP",
    accessor: "ip",
  },
];

const data = [
  {
    ip: "00.00.00.00.00.00",
  },
];
export default WhitelistedAddresses;
