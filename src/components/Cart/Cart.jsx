import React, { useState, useEffect } from 'react'
import './Cart.css'
import { useContext } from 'react'
import { GlobalContext } from '../../MyContexts'


function Cart() {

    const {cartCount, cartItems, login, setCartItems, setCartCount} = useContext(GlobalContext)
    const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate the total price whenever cartItems change
    let newTotalPrice = 0;

    for (const item of cartItems) {
      newTotalPrice += item.price * item.count;
    }

    setTotalPrice(newTotalPrice);
    }, [cartItems]);


    function handleQuantityChange(item, change) {
        // Calculate the new count
        const newCount = Math.max(0, item.count + change);
      
        if (newCount === 0) {
          // If the new count is zero, remove the item from the cart
          removeFromCart(item);
        } else {
          // Otherwise, update the quantity as usual
          const updatedCartItems = cartItems.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, count: newCount } : cartItem
          );
      
          // Update the cart with the new array of items
          setCartItems(updatedCartItems);
      
          // Calculate the new cartCount based on the updated items
          const newCartCount = updatedCartItems.reduce((count, cartItem) => count + cartItem.count, 0);
          setCartCount(newCartCount);
        }
      }

      // Function to remove an item from the cart
        function removeFromCart(item) {
            // Filter out the item to be removed
            const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        
            // Update the cart with the new array of items
            setCartItems(updatedCartItems);
        
            // Calculate the new cartCount based on the updated items
            const newCartCount = updatedCartItems.reduce((count, cartItem) => count + cartItem.count, 0);
            setCartCount(newCartCount);
  }


    if(login !== 'logged-in'){
        return null
    }else {
        return (
            <div>
                <div className='cart-img' data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                
                <div className="offcanvas offcanvas-end" data-bs-backdrop="static" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                    <div className="offcanvas-header">
                        <h3 className="offcanvas-title" id="staticBackdropLabel">CART</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        {cartItems.map((item, i)=>{
                            return(
                                <div key={i} className="cartItem">
                                    <div className="canvas-cont">
                                        <div className="cartitem-img">
                                            <img src={item.images && item.images.length > 0 ? 
                                                item.images[0]:
                                                "No image found"   
                                        } 
                                        alt={item.title} height="100%" width="100%" />
                                        </div>
                                        <div className="cartitem-detail">
                                            <div className='item-cat'>{`${item.category}`.toUpperCase()}</div>
                                            <h4>{item.title}</h4>
                                            <h5>${item.price*item.count}</h5>
                                            <div className='item-quantity'>
                                                <button onClick={() => handleQuantityChange(item, -1)}>-</button>
                                                <span>{item.count}</span>
                                                <button onClick={() => handleQuantityChange(item, 1)}>+</button>
                                            </div>
                                            <div>
                                                <button className='remove' onClick={() => removeFromCart(item)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                        <button className="btn checkout">CHECKOUT - ${totalPrice}</button>
                    </div>
                </div>
    
                    <div className="count-box">
                    <div className={cartCount!==0 ? "count" : "" }>{cartCount}</div>
                    </div>
                    <img src='https://img.icons8.com/windows/344/shopping-cart.png' height={25} width={25} alt='c-logo' />
                </div>
            </div>
        )
    }


    
}

export default Cart