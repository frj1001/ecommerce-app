import React, { useContext } from 'react'
import './Pagination.css'
import './Paginationmediaquery.css'
import { GlobalContext } from '../../MyContexts'

function Pagination({totalProducts, productsPerPage}) {
    
    const {currentPage, setCurrentPage} = useContext(GlobalContext)
    
    let pages = []

    //loop to populate pages based on totalproducts devided by products per page
    for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++ ){
        pages.push(i)
    }

    //function to display previous pages in pagination
    function handlePrevious(){
        if(currentPage !== 1){
            setCurrentPage(currentPage-1)
        }
    }

    //function to display next pages in pagination
    function handleNext(){
        if(currentPage !== pages.length){
            setCurrentPage(currentPage+1)
        }
    }

  return (
    <div className='col'>
        <div className='custom-container'>
            <button className='btn btn-primary' onClick={handlePrevious}>Previous </button>
            <div className='pagination'>
                {pages.map((page, index)=>{
                    return <button className={page===currentPage ? 'active': ''} key={index} onClick={()=>setCurrentPage(page)}>{page}</button>
                })}
            </div>
            <button className='btn btn-primary' onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default Pagination