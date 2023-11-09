import React from 'react'
import './NewArrivals.css'
import ProductCard from '../../components/ProductCard/ProductCard'

function NewArrivals({items}) {


  return (
    <div className='newarrivals'>
      <h1>New Arrivals</h1>
      <div className="new-container">
        <div className="row">
          {items.map((product, i)=>{
              return(<ProductCard product={product} key={i}/>)
          })}
        </div>
      </div>
    </div>
  )
}

export default NewArrivals