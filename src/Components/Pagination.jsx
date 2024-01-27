
// eslint-disable-next-line react/prop-types
const Pagination = ({onPageChange, currentPage, blogs, pageSize}) => {
    // eslint-disable-next-line react/prop-types
    const totalPages = Math.ceil(blogs.length / pageSize);
    //console.log(totalpages)
    const renderPaginationLinks = () => {
        return Array.from({length: totalPages}, (_, i) => i + 1).map((pageNumber) =>(
            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <a href='#' onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    } 
    // console.log(totalPages)
  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
        <li>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage ===1}>Previous</button>
        </li>
        <div className='flex gap-1'>{renderPaginationLinks()}</div>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
    </ul>
  )
}

export default Pagination;