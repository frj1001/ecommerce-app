import React, { useContext, useState} from 'react';
import './ProductDetail.css'
import './ProductDetailquery.css'
import { GlobalContext } from '../../MyContexts';

function ProductDetail({product}) {

    const [detail, setDetail] = useState({})
    const [currentImage, setCurrentImage] = useState(null)
    const [mainImg, setMainImg] = useState(null)
    
    const {addToCart} = useContext(GlobalContext)
        
    // Function to set the main image in product details
    const handleClick = (product)=> {
        setDetail(product)
        setMainImg(product.images[0])
        setCurrentImage(null)
    }

    // Function to set product count in cart on add to cart button
    const handleCart = (product) => {
        addToCart(product)
    }

    // Display main image based on small images click
    const displayImage = (e)=> {
        setCurrentImage(e.target.src)
    }
    
    return (
        <div className='p-detail'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#staticBackdrop-${product.id}`} onClick={()=>handleClick(product)}>
                More Info
            </button>

            <div className="modal modal-xl fade" id={`staticBackdrop-${product.id}`} data-bs-backdrop="static" data-bs-keyboard="true" aria-labelledby={`staticBackdropLabel-${product.id}`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`staticBackdropLabel-${product.id}`}>{`${detail.category}`.toUpperCase()}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="detail">
                                <div className="img-div">
                                    <div className="main-img">
                                        <img src={currentImage===null ? `${mainImg}`: `${currentImage}`} alt="" height="100%" width="100%" />
                                    </div>
                                    <div className="img-arr">
                                    {detail.images && detail.images.length > 0 ? (
                                        detail.images.map((image, i) => (
                                            <div key={i} className="imgs" onClick={displayImage}>
                                                <img src={`${image}`} alt="" height="100%" width="100%"/>
                                            </div>
                                        ))
                                        ) : (
                                            <p>No images available</p>
                                        )}
                                    </div>
                                </div>
                                <div className="description-div">
                                    <div className="title-brand">
                                        <h4>{detail.title}</h4>
                                        <div>{detail.brand}</div>
                                    </div>
                                    <h5 className="price">${detail.price} <span>{detail.discountPercentage}%OFF</span></h5>
                                    <div className="stock">({detail.stock}) InStock</div>
                                    <p>{detail.description}</p>
                                    <div>
                                        <button className="btn btn-success" onClick={()=>handleCart(product)}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail