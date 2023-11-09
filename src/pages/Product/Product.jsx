import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import './Product.css'
import './Productmediaquery.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useState } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import { useLocation } from 'react-router-dom'
import { GlobalContext } from '../../MyContexts'


function Product({searchResults, categories}) {

  const [products, setProducts] = useState([])
  const {currentPage, setCurrentPage} = useContext(GlobalContext)
  const [loading, setLoading] = useState(true)

  const location = useLocation()
  const [catData, setCatData] = useState(location.state)
  
  

  useEffect(()=>{
    
    // Condition to render products based on search input
    if(searchResults.length!==0){  
      setProducts(searchResults)
      setLoading(false)
    }

    // Api fetching and condition to render products based on category sorting from home page
    else if(catData!==null){
      setCurrentPage(1)
      axios.get(`https://dummyjson.com/products/category/${catData}`)
      .then(response=> {
        setProducts(response.data.products)
        setLoading(false)
      })
      .catch((error) => console.log(error))
    }

    // Api fetching and condition to render all products
    else if(products.length===0){
      getProducts()
    }
    
  },[searchResults, catData])

  
  // Function to fetch all products from api
  function getProducts(){
    searchResults.length = 0
    setCatData(null)
    setCurrentPage(1)
    axios.get('https://dummyjson.com/products?limit=0')
    .then(response => {
    setProducts(response.data.products)
    setLoading(false)
    })
    .catch((error) => console.log(error))
  }
  
  // Funtion to fetch category data from api based on category click
  const handleCategory = (e)=> {
    searchResults.length = 0
    setCatData(null)
    setCurrentPage(1)
    axios.get(`https://dummyjson.com/products/category/${e.target.innerText}`)
    .then(response=> setProducts(response.data.products))
    .catch((error) => console.log(error))
    
  }


  console.log(searchResults)

  // Declaring variables for pagination based on 9 products per page
  const productsPerPage = 9
  const lastProductIndex = currentPage * productsPerPage
  const firstProductIndex = lastProductIndex - productsPerPage
  const currentProducts = products.slice(firstProductIndex, lastProductIndex)


  if(loading){
    return <h1 style={{textAlign:'center'}}>Loading...</h1>
  }else {
    return (
      <div>
        <div className="container-fluid border">
          <div className="row">
            <div className="col-2 options">
              <div className='container-fluid d-flex justify-content-evenly mt-3'>
                <div className='sorting-img'>
                  <img src="https://img.icons8.com/color/48/sorting-options.png" width={35} height={35} alt="sorting-options"/>
                </div>
                <div>
                  <h3 className='filter'>Search Filter</h3>
                </div>
              </div>
              <div className="accordion mt-3" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Categories
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      <div className='category'>
                        <button onClick={()=>getProducts()}>All Items</button>
                      </div>
                      {categories.map((category, ind)=>{
                        return (
                        <div className='category' key={ind}>
                          <button onClick={handleCategory}>{category}</button>
                        </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10">
              <div className="container-fluid">
                <div className="row mt-3">
                  {currentProducts.map((product, i)=>{
                    return(<ProductCard product={product} key={i}/>)
                    })
                  }
                </div>
                <div className="row mt-4 mb-3">
                  <Pagination
                    totalProducts={products.length}
                    productsPerPage={productsPerPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  
}

export default Product