import React, { useContext } from 'react'
import './Header.css'
import './Mediaquery.css'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../MyContexts'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'




function Header({setSearchText, searchResults}) {
  
  const {login, setLogin} = useContext(GlobalContext)
  const {cartCount} = useContext(GlobalContext)
  const {cartItems} = useContext(GlobalContext)
  const nav = useNavigate()
  const inputRef = useRef()

  const handleLogin = ()=> {
    setLogin("logged-out")
    localStorage.setItem('login', 'logged-out')
    nav('/')
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  const handleSearch = (e)=>{
    nav('/products')
    setSearchText(inputRef.current.value)
  }

  return (
    <div className='header'>
      <div className='header-left'>
        <div className='navigation'>
          <div>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }} onClick={()=>searchResults.length=0}>Home</Link>
          </div>
          <div>
            <Link to={'/about'} style={{ textDecoration: 'none', color: 'black' }} onClick={()=>searchResults.length=0}>About</Link>
          </div>
          <div>
            <Link to={'/products'} style={{ textDecoration: 'none', color: 'black' }} onClick={()=>searchResults.length=0}>Products</Link>
          </div>
          <div>
            <Link to={'/newarrivals'} style={{ textDecoration: 'none', color: 'black' }} onClick={()=>searchResults.length=0}>New Arrivals</Link>
          </div>
        </div>
        <div className='logo-button'>
            <div>
              <img src='https://img.icons8.com/color/344/shopping-bag--v1.png' height={39} width={39} alt='s-logo' />
            </div>
            <div>
              {login==="logged-in"||localStorage.getItem('login')==="logged-in" ? 
                <button type="button" className="btn btn-dark lgn-btn" onClick={handleLogin}>
                  Logout
                </button> :
                <button type="button" className="btn btn-primary lgn-btn">
                <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
                </button>
              } 
            </div>
        </div>
      </div>
      <div className='cart-search'>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Products"
              aria-label="Search"
              ref={inputRef}
              required
            />
            <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>
              Search
            </button>
          </form>
          <div className='cart-img' onClick={()=>console.log(cartItems)}>
            <div className="count-box">
              <div className={cartCount!==0 ? "count" : "" }>{cartCount}</div>
            </div>
            <img src='https://img.icons8.com/windows/344/shopping-cart.png' height={25} width={25} alt='c-logo' />
          </div>
      </div>
    

    </div>
  )
}

export default Header