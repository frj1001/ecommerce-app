import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-4 col-lg-2">
            <ul>
              <li className='head'>ABOUT US</li>
              <li><a href="https://github.com/frj1001">WHO ARE WE</a></li>
              <li><a href="https://github.com/frj1001">CAREERS</a></li>
              <li><a href="https://github.com/frj1001">LOOKBOOK</a></li>
              <li><a href="https://github.com/frj1001">OUR RESPONSIBILITY</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-2">
            <ul>
              <li className='head'>CUSTOMER SERVICE</li>
              <li><a href="https://github.com/frj1001">CONTACT US</a></li>
              <li><a href="https://github.com/frj1001">DELIVERY</a></li>
              <li><a href="https://github.com/frj1001">EXCHANGE POLICY</a></li>
              <li><a href="https://github.com/frj1001">TRACK YOUR ORDER</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-2">
            <ul>
              <li className='head'>INFORMATION</li>
              <li><a href="https://github.com/frj1001">PRIVACY AND POLICY</a></li>
              <li><a href="https://github.com/frj1001">TERMS AND CONDITIONS</a></li>
              <li><a href="https://github.com/frj1001">FAQ's</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className='head'>WE ACCEPT</div>
            <div className='accept'>
              <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/visa-new.png?v=1611402260" alt="" height="40" width="40"/>
              <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/master-new.png?v=1611402260" alt="" height="40" width="40"/>
              <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/ssl-new.png?v=1611402260" alt="" height="40" width="40"/>
            </div>

                </div>
                <div className="col-md-6 col-lg-3">
                  <div className='head'>FOLLOW US</div>
                  <div className="follow mt-2">
                    <a href="https://www.facebook.com/"><img src="https://cdn.shopify.com/s/files/1/2277/5269/files/fb-new.png?v=1611402260" alt="" height="25" width="25"/></a>
                    <a href="https://www.instagram.com/"><img src="https://cdn.shopify.com/s/files/1/2277/5269/files/insta-new.png?v=1611402261" alt="" height="25" width="25"/></a>
                    <a href="https://www.youtube.com/"><img src="https://cdn.shopify.com/s/files/1/2277/5269/files/you-new.png?v=1611402259" alt="" height="34" width="34"/></a>
                  </div>
                </div>
              </div>
          </div>
          <p className='sample'>©Sample Ecommerce Interface by Farhaj</p>
        </div>
        )
}

        export default Footer