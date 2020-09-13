import React from 'react';
import { Link} from 'react-router-dom'
import './slider'

// Product or change to Jewelry //
const Product = () => {
    return (
      <div className="wrapper">
        <div className="card front-face">
          <div class="image"></div>
          <img src="{product.img.src}"></img></div>
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