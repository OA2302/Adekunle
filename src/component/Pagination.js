import React from 'react';
import './pagination.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button className='pg' onClick={() => onPageChange(currentPage - 1)}><FaArrowLeft/></button>
      )}
      {pageNumbers.map(page => (
        <button
          key={page}
          className={page === currentPage ? 'active' : ''}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button className='pg' onClick={() => onPageChange(currentPage + 1)}><FaArrowRight/></button>
      )}
    </div>
  );
}

export default Pagination;
