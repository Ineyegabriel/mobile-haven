import React from "react";
import './Pagination.scss';
const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  let condition = Math.ceil(totalPosts / postPerPage);
  for (let i = 1; i <= condition; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="Pagination">
      <ul className="List">
        {pageNumbers.map((number) => (
          <li key={number} className="Item">
            <button className="Button" onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
