import React from 'react';
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const startPage = Math.max(1, currentPage - 4);
  const endPage = Math.min(totalPages, startPage + 8);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? 'pagination_btn_active' : 'pagination_btn_inactive'}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;