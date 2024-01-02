import "./Pagination.scss"

type PaginationProps = {
    cardPerPage: number;
    totalCards:number;
    paginate: any;
}

export const Pagination = ({ cardPerPage, totalCards, paginate}:PaginationProps) => {
  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalCards / cardPerPage); index++) {
    pageNumbers.push(index);
  }
  return (
    <div className='pagination'>
      <p className="pagination-heading">Pages</p>
      <ul className='pagination-ul'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'onClick={() => paginate(number)}>
            <p>{number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
