import React from "react";
import "./pagination.css";

export default function Pagination({ reposPerPage, totalRepos, paginate }) {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNums.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNums.map((num) => (
          <li key={num} className="page-item">
            <span onClick={() => paginate(num)} className="page-link">
              {num}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
