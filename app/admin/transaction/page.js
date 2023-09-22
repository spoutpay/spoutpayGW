"use client";
import ButtonWithIcon from "@/app/components/Admin/ButtonWithIcon";
import Dropdown from "@/app/components/Admin/DropdownComponent";
import InputWithIcon from "@/app/components/Admin/InputWithIcon";
import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AppData from "../../config/appData.json";
import { formatDate } from "@/app/utils/FormatDate";

const Transaction = () => {
  const options = [{ label: "Option 1", value: "option1" }];
  const [isLoading, setIsLoading] = useState(false);

  const [transactions, setTransactions] = useState("");
  console.log(transactions?.data?.data);
  const data = transactions?.data?.data;
  const [selectedValue, setSelectedValue] = useState(false);

  const handleSelect = (option) => {
    setSelectedValue(option.value);
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${AppData.BASE_URL}transactions/history`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      .then(function (response) {
        console.log(response);
        setTransactions(response);
        setIsLoading(false);
      })
      .catch(function (error) {});
  }, []);

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
        {isLoading ? (
          <p>...Loading</p>
        ) : (
          <table className="w3-table w3-bordered  ">
            <thead className="bg-[#F9FBFC]">
              <tr>
                {columns.map((i, idx) => (
                  <th key={idx}>{i.Header}</th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white w-full text-sm">
              {data?.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <Icon icon="system-uicons:checkbox-empty" width={30} />
                  </td>
                  <td>{item.email_address}</td>
                  <td>{item.request_type}</td>
                  <td>₦{item.amount}</td>
                  <td>{item.spout_tx_ref}</td>
                  <td>pending</td>
                  <td>{item.redirect_url}</td>
                  <td></td>
                  <td>{formatDate(item.createdAt)}</td>
                  <div className="flex items-center ">
                    <button>
                      <Icon
                        icon="ic:baseline-download"
                        color="#0b80fa"
                        width={25}
                      />
                    </button>

                    <button className="text-xs">
                      <Icon
                        icon="icomoon-free:bin"
                        color="#8b8b8b"
                        width={25}
                      />
                    </button>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

const columns = [
  {
    Header: <Icon icon="system-uicons:checkbox-empty" width={30} />,
    accessor: "checkbox",
    Cell: ({ row }) => <Icon icon="system-uicons:checkbox-empty" width={30} />,
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
    Cell: ({ row }) => (
      <div className="flex items-center gap-3">
        {" "}
        <Icon icon="ic:baseline-download" color="#0981fd" width={25} />{" "}
        <Icon icon="icomoon-free:bin" width={25} />{" "}
      </div>
    ),
  },
];

const data = [
  {
    customer_id: "customer1@example.com",
    channel: "Online",
    ammount: "$100",
    receipt_number: "12345",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#179800" width={25} />
        <p>Successful</p>
      </div>
    ),
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-13 10:00 AM",
  },
  {
    customer_id: "customer2@example.com",
    channel: "In-Store",
    ammount: "$50",
    receipt_number: "67890",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#179800" width={25} />
        <p>Successful</p>
      </div>
    ),
    payment_page: "PaymentPage2",
    terminal_id: "T234",
    date: "2023-08-13 02:30 PM",
  },
  {
    customer_id: "customer3@example.com",
    channel: "Online",
    ammount: "$200",
    receipt_number: "54321",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#FF0027" width={25} />
        <p>Failed</p>
      </div>
    ),
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-14 09:15 AM",
  },
  {
    customer_id: "customer4@example.com",
    channel: "In-Store",
    ammount: "$75",
    receipt_number: "98765",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#8D4511" width={25} />
        <p>Abandoned</p>
      </div>
    ),
    payment_page: "PaymentPage2",
    terminal_id: "T234",
    date: "2023-08-15 03:45 PM",
  },
  {
    customer_id: "customer5@example.com",
    channel: "Online",
    ammount: "$150",
    receipt_number: "56789",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#A40EC7" width={25} />
        <p>Reversed</p>
      </div>
    ),
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-16 11:30 AM",
  },
  {
    customer_id: "customer1@example.com",
    channel: "Online",
    ammount: "$100",
    receipt_number: "12345",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#A40EC7" width={25} />
        <p>Reversed</p>
      </div>
    ),
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-13 10:00 AM",
  },
  {
    customer_id: "customer2@example.com",
    channel: "In-Store",
    ammount: "$50",
    receipt_number: "67890",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#8D4511" width={25} />
        <p>Abandoned</p>
      </div>
    ),
    payment_page: "PaymentPage2",
    terminal_id: "T234",
    date: "2023-08-13 02:30 PM",
  },
  {
    customer_id: "customer3@example.com",
    channel: "Online",
    ammount: "$200",
    receipt_number: "54321",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#8D4511" width={25} />
        <p>Abandoned</p>
      </div>
    ),
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-14 09:15 AM",
  },
  {
    customer_id: "customer4@example.com",
    channel: "In-Store",
    ammount: "$75",
    receipt_number: "98765",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#FF0027" width={25} />
        <p>Failed</p>
      </div>
    ),
    payment_page: "PaymentPage2",
    terminal_id: "T234",
    date: "2023-08-15 03:45 PM",
  },
  {
    customer_id: "customer5@example.com",
    channel: "Online",
    ammount: "$150",
    receipt_number: "56789",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#FF0027" width={25} />
        <p>Failed</p>
      </div>
    ),
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-16 11:30 AM",
  },
  {
    customer_id: "customer1@example.com",
    channel: "Online",
    ammount: "$100",
    receipt_number: "12345",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#179800" width={25} />
        <p>Successful</p>
      </div>
    ),
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-13 10:00 AM",
  },
  {
    customer_id: "customer2@example.com",
    channel: "In-Store",
    ammount: "$50",
    receipt_number: "67890",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#FF0027" width={25} />
        <p>Failed</p>
      </div>
    ),
    payment_page: "PaymentPage2",
    terminal_id: "T234",
    date: "2023-08-13 02:30 PM",
  },
  {
    customer_id: "customer3@example.com",
    channel: "Online",
    ammount: "$200",
    receipt_number: "54321",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#FF0027" width={25} />
        <p>Failed</p>
      </div>
    ),
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-14 09:15 AM",
  },
  {
    customer_id: "customer4@example.com",
    channel: "In-Store",
    ammount: "$75",
    receipt_number: "98765",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#FF0027" width={25} />
        <p>Failed</p>
      </div>
    ),
    payment_page: "PaymentPage2",
    terminal_id: "T234",
    date: "2023-08-15 03:45 PM",
  },
  {
    customer_id: "customer5@example.com",
    channel: "Online",
    ammount: "$150",
    receipt_number: "56789",
    status: (
      <div className="flex items-center ">
        <Icon icon="radix-icons:dot-filled" color="#179800" width={25} />
        <p>Successful</p>
      </div>
    ),
    payment_page: "PaymentPage1",
    terminal_id: "T123",
    date: "2023-08-16 11:30 AM",
  },
];
export default Transaction;
