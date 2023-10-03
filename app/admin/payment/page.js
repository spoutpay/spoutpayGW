"use client";
import ButtonWithIcon from "@/app/components/Admin/ButtonWithIcon";
import Checkbox from "@/app/components/Admin/CheckBox";
import Dropdown from "@/app/components/Admin/DropdownComponent";

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
import { Icon } from "@iconify/react";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useTable } from "react-table";

const Payment = () => {
  const router = useRouter();
  const options = [{ label: "Option 1", value: "option1" }];
  const [selectedValue, setSelectedValue] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("4xl");

  const handleSizeClick = (newSize) => {
    setSize(size);
    onOpen();
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
    <>
      <div>
        <div className=" flex justify-between items-center px-10 pt-5 ">
          <p className="text-xl">Payment Links - 3</p>

          <div className="flex justify-between gap-5">
            <Dropdown
              title={"All Payment"}
              icon={"ep:arrow-down"}
              options={options}
              className={"border border-black rounded-sm py-3 px-4"}
            />
            <ButtonWithIcon
              icon="ic:baseline-download"
              color="#0981fd"
              size={"30"}
              className="bg-[#DDEDFF] border-2 border-[#0B80FA]"
            >
              Download Report
            </ButtonWithIcon>

            <ButtonWithIcon
              icon="majesticons:plus"
              color="white"
              size={"30"}
              key={size}
              className="bg-black text-white"
              onClick={() => handleSizeClick(size)}
            >
              Complete Payment
            </ButtonWithIcon>
          </div>
        </div>
        <hr className="bg-[#D9D9D9] h-[1px]" />
        {/* Table */}
        <div className="px-5 pt-10">
          <div className="w-full w3-container w3-responsive">
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

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={size}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {" "}
            <h2 className="text-center text-lg">
              Select A Payment Link Type To Conue
            </h2>
          </ModalHeader>
          <ModalBody>
            <div className="">
              <div
                className="flex gap-8 px-20 pt-14
          "
              >
                <section className="group">
                  <div className="p-5 border border-[#707070] rounded-md  group-hover:bg-[#F4F9FF] group-hover:border-[#0981FC] ">
                    <div className="flex justify-end">
                      {/* <Checkbox
                       
                        initialValue={false}
                        buttonClassName={"items-end"}
                      /> */}
                    </div>
                    <span className="flex justify-center mx-auto py-5 group-hover:text-[#0981FC]">
                      <Icon
                        icon="clarity:notification-outline-badged"
                        width={40}
                      />
                    </span>
                    <p className="text-center text-sm font-bold mb-3">
                      Single Charge
                    </p>
                    <p className="text-center text-sm text-[#959595]">
                      Create a link to receive one-time payment from your
                      customers
                    </p>
                  </div>
                </section>
                <section className="group ">
                  <div className="p-5 border border-[#707070] rounded-md group-hover:bg-[#F4F9FF] group-hover:border-[#0981FC]">
                    <div className="flex justify-end">
                      {/* <Checkbox
                        initialValue={false}
                        buttonClassName={"items-end"}
                      /> */}
                    </div>
                    <span className="flex justify-center mx-auto py-5 group-hover:text-[#0981FC]">
                      <Icon
                        icon="clarity:notification-outline-badged"
                        width={40}
                      />
                    </span>
                    <p className="text-center text-sm font-bold mb-3">
                      Subscription Link
                    </p>
                    <p className="text-center text-sm text-[#959595]">
                      For reoccurring payment create a link that suits your need
                    </p>
                  </div>
                </section>
                <section className="group ">
                  <div className="p-5 border border-[#707070] rounded-md group-hover:bg-[#F4F9FF] group-hover:border-[#0981FC]">
                    <div className="flex justify-end">
                      {/* <Checkbox
                        initialValue={false}
                        buttonClassName={"items-end"}
                      /> */}
                    </div>
                    <span className="flex justify-center mx-auto py-5 group-hover:text-[#0981FC]">
                      <Icon icon="system-uicons:box-open" width={40} />
                    </span>
                    <p className="text-center text-sm font-bold mb-3">
                      Donations
                    </p>
                    <p className="text-center text-sm text-[#959595]">
                      Receive one-time donations for your charity or towards
                      your cause
                    </p>
                  </div>
                </section>
              </div>
              <div className="flex justify-center mt-20 pb-20">
                {" "}
                <ButtonWithIcon
                  icon="majesticons:plus"
                  color="white"
                  size={"30"}
                  className="bg-black text-white"
                  onClick={() => router.push("/payment-pages")}
                >
                  Complete Payment
                </ButtonWithIcon>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const columns = [
  {
    Header: "PAGENAME",
    accessor: "page_name",
  },

  {
    Header: "AMMOUNT",
    accessor: "ammount",
  },
  {
    Header: "LINK TYPE",
    accessor: "link_type",
  },
  {
    Header: "PAYMENT LINK",
    accessor: "payment_link",
  },

  {
    Header: "DATE CREATED",
    accessor: "date_created",
  },
];

const data = [
  {
    page_name: "Sanusi T Segun",
    ammount: "N1376.5",
    link_type: "Single Charge",
    payment_link: (
      <button className="border border-gray-300 px-4 py-1 rounded-md">
        Payment Page
      </button>
    ),
    date_created: "3 Dec 2022, 4:43 pm",
  },
];

export default Payment;
