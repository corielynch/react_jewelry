import React from 'react';
import './style.css'

// Product or change to Jewelry //
const Product = () => {
    return (
      <div className="wrapper">
        <div className="card front-face">
          <div class="image"></div>
          <img src="{product.img.src}" alt="product.title"></img></div>
        <div className="card back-face">
          <div className="info">
          <div class="title">product.name</div>
            <div class="image">
            <img src="{product.img.src}" alt="{product description}"></img>
          </div>
          </div>
        </div>
      </div>
    )
  }
  export default Product;