// components/Pagination.js

import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex space-x-2">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 bg-blue-500 text-white rounded"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              onClick={() => onPageChange(pageNumber)}
              className={`px-2 py-1 ${
                currentPage === pageNumber
                  ? "bg-blue-500 text-white rounded"
                  : "bg-gray-200 text-gray-700 rounded"
              }`}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
