import React from 'react'
import './Home.css'
import './Homemediaquery.css'
import './Homeanimations.css'
import { Link } from 'react-router-dom'
import CategoryCard from '../../components/CategoryCard/CategoryCard'


function Home({ categories, items }) {

  return (
    <div className='home'>
      <div className='hero'>
        <div className='hero-content'>
          <h1 className='text-focus-in'>Welcome to MyStore</h1>
          <h2 className='tracking-in-contract'>Your One-Stop Shop for Everything You Need</h2>
          <div className='button1'>
            <Link to={'/products'} style={{ color: 'white' }}>
              <button type="button" className="btn btn-lg">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
      <h3>OUR PRODUCTS</h3>
      <div className="container cat-box">
        <div className="row">
          {categories.map((category, i) => {
            return (
              <CategoryCard key={i} category={category} />
            )
          })}
        </div>
      </div>
      <h3>NEW ARRIVALS</h3>
      <div className='new-arrival'>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='crs-container'>
                <div className="row">
                  <div className="col border">
                    {items && items.length > 0 ? (
                      <Link to={'./newarrivals'}><img src={`${items[0].images[0]}`} alt="img" height="100%" width="100%" /></Link>
                    ):(
                      <p>No images available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {items.map((item, i)=>{
              if(i===0){
                return null
              }
              return(
                <div key={i} className="carousel-item">
              <div className='crs-container'>
                  <div className="row">
                    <div className="col border">
                      {item.images && item.images.length > 0 ? (
                        <Link to={'./newarrivals'}><img src={`${item.images[0]}`} alt="img" height="100%" width="100%" /></Link>
                      ):(
                        <p>No images available</p>
                      )}
                    </div>
                  </div>
                </div>
            </div>
              )
            })}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon ico" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon ico" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home