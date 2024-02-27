/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom';
import Ratting from '../components/Ratting';

const ProductCards = ({GridList, Products}) => {
  console.log(Products);
  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
        {
          Products.map((Products, i)=>(
            <div key={i} className='col-lg-4 col-md-6 col-12'>
              <div className='product-item'>
                {/* product images */}
                <div className='product-thumb'>
                  <div className='pro-thumb'>
                    <img src={Products.img} alt="" />
                  </div>
                  {/* product action links */}
                  <div className='product-action-link'>
                    <Link to={`/shop/${Products.id}`}><i className='icofont-eye'></i></Link>
                    <a href="#">
                      <i className='icofont-heart'></i>
                      </a>    
                    <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
                               
                  </div>
                </div>

                {/* product content */}
                <div className='product-content'>
                  <h5>
                    <Link to={`/shop/${Products.id}`}>{Products.name}</Link>
                  </h5>
                  <p className='productRating'>
                    <Ratting/>
                  </p>
                  <h6>${Products.price}</h6>
                </div>
              </div>
              {/* list style */}
              <div className='product-lis-item'>
                {/* product images */}
                <div className='product-thumb'>
                  <div className='pro-thumb'>
                    <img src={Products.img} alt="" />
                  </div>
                  {/* product action links */}
                  <div className='product-action-link'>
                    <Link to={`/shop/${Products.id}`}><i className='icofont-eye'></i></Link>
                    <a href="#">
                      <i className='icofont-heart'></i>
                      </a>    
                    <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
                               
                  </div>
                </div>

                {/* product content */}
                <div className='product-content'>
                  <h5>
                    <Link to={`/shop/${Products.id}`}>{Products.name}</Link>
                  </h5>
                  <p className='productRating'>
                    <Ratting/>
                  </p>
                  <h6>${Products.price}</h6>
                </div>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default ProductCards