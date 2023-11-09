import React from 'react'
import ProductDetail from '../ProductDetail/ProductDetail'
import './ProductCardquery.css'

function ProductCard({product}) {
  
  if(product.images && product.images.length>0){
    return (
        <div className="col-md-6 col-lg-4 my-4">
            <div className="card">
                <img src={product.images[0]} className="card-img-top" alt={product.title} width={500} height={300}/>
                <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <h6 className="card-title" style={{color:'green'}}><i>${product.price}</i></h6>
                    <h6 className="card-title"><span style={{color: '#ffa500'}}>Rating: {product.rating}/5.0</span></h6>
                    <ProductDetail product={product}/>
                </div>
            </div>
        </div>
    )
  }else {
    return <div>
        <h1>{product.title}</h1>
    </div>
  }
}

export default ProductCard