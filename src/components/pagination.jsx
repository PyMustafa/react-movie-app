import React from "react"; 

const Pagination =({currentPage, totalPages, onPageChange}) => {
return(
    <div className="pagination">
            <button
    className="pagination-btn"
    onClick={() => onPageChange(currentPage -1)}
    disabled={currentPage === 1}
    >
        &lsaquo;
    </button>
    <button
    className="pagination-btn"
    onClick={() => onPageChange(currentPage -1)}
    disabled={currentPage === 1}
    >
        {currentPage-1}
    </button>
<button className="pagination-btn-active" onClick={() => onPageChange(currentPage)}> {currentPage} </button>
<button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {currentPage + 1}
      </button>
      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &rsaquo;
      </button>
</div>
)
}

export default Pagination