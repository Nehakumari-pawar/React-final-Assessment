import React from 'react'

const Pagination = ({productPerPage,totalProducts,paginate}) => {

    const pageNumber=[];
    
    for(let i=1;i<=Math.ceil(totalProducts/productPerPage); i++)
    {
        pageNumber.push(i);
    }
    return (
        <nav >
            <ul className="pagination justify-content-center mh-100">
                {pageNumber.map(number =>
                {
                    return(
                        <li key={number} className=' paginate ' >
                        <a onClick={() => paginate(number)} href='#' className='page-link  mh-100 ' >
                            {number}
                        </a>
                    </li>
                    )
                    
                })}

            </ul>
        </nav>
    )
}

export default Pagination
