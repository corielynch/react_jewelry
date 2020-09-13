import React from 'react';
// import src from '*.bmp';
import { Link} from 'react-router-dom'
import './product.css'

// Simple card container to hold product information //
const Product = () => {
    return (
      <div>
        <div className="container">
          <div className="image">
            <img src="{product.img.src}" alt="{product description}"></img>
          </div>
            <div className="card-content">
              <div className="wrapper">
                <div className="title">product.name</div>
                <p>product.description</p>
                <span className="price">product.price</span>
                <div className="content size">
                  <div className="name size-name">Size</div>
                    <div className="size-value">
                      <span className="color">Custom sizes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}
export default Product;


