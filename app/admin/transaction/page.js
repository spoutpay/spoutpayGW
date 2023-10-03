"use client";
import ButtonWithIcon from "@/app/components/Admin/ButtonWithIcon";
import Dropdown from "@/app/components/Admin/DropdownComponent";
import InputWithIcon from "@/app/components/Admin/InputWithIcon";
import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import AppData from "../../config/appData.json";
import { formatDate } from "@/app/utils/FormatDate";

const Transaction = () => {
  const options = [{ label: "Option 1", value: "option1" }];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const [transactions, setTransactions] = useState("");

  const data = transactions?.data?.data;
  const [filteredData, setFilteredData] = useState(data);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const dataToDisplay = filteredData?.slice(startIndex, endIndex);
  const [selectedValue, setSelectedValue] = useState(false);

  useEffect(() => {
    const results = data?.filter(
      (row) =>
        row.email_address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.request_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.spout_tx_ref.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm, data]);

  const handleSelect = (option) => {
    setSelectedValue(option.value);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle "Next" button click
  const handleNextClick = () => {
    if (endIndex < data?.length) {
      setCurrentPage(currentPage + 1);
    }
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
        setItemsPerPage(itemsPerPage);
        setIsLoading(false);
      })
      .catch(function (error) {});
  }, []);

  const Table = useMemo(
    () => (
      <>
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
              {dataToDisplay?.map((row, idx) => (
                <tr key={idx}>
                  <td>
                    <Icon icon="system-uicons:checkbox-empty" width={30} />
                  </td>
                  <td>{row.email_address}</td>
                  <td>{row.request_type}</td>
                  <td>₦{row.amount}</td>
                  <td>{row.spout_tx_ref}</td>
                  <td>pending</td>
                  <td>{row.redirect_url}</td>
                  <td></td>
                  <td>{formatDate(row.createdAt)}</td>
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
      </>
    ),
    [dataToDisplay]
  );

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* <input type="text" placeholder="Search by name or email" /> */}
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
        {Table}
        <div className="mt-10 flex justify-end ">
          <button
            onClick={handlePreviousClick}
            disabled={currentPage === 1}
            className="border-2 border-[#DEE2E6] px-5 py-2"
          >
            Previous
          </button>
          <span className="border-2 border-[#DEE2E6] px-5 py-2">
            Page {currentPage}
          </span>
          <button
            onClick={handleNextClick}
            disabled={endIndex >= data?.length}
            className="border-2 border-[rgb(222,226,230)] px-5 py-2"
          >
            Next
          </button>
        </div>
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
  },
];

export default Transaction;
