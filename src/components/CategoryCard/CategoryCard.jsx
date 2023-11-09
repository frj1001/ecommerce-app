import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './CategoryCard.css'
import axios from 'axios'

function CategoryCard({category}) {


  const[categoryImg, setCategoryImg] = useState(null)  
  

  useEffect(()=>{
    axios.get(`https://api.unsplash.com/search/photos?query=${category}&client_id=7cFv2n_C5c04IUMz_frBr37u3bGB1mZ_x7ISdiYZOow`)
    .then(response => setCategoryImg(response.data.results[0].urls.raw) )
    .catch((error) => console.log(error))
  })  

  
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 my-4">
        <div className='cat-card'>
            <div className='cat-img'>
                <Link to={'/products'} state={category} ><img src={categoryImg} width="100%" height="100%" alt={category}/></Link>
            </div>
            <div className='cat-title' >{category.toUpperCase()}</div>            
        </div>
    </div>
  )
}

export default CategoryCard