import React from 'react';
// import src from '*.bmp';
import { Link} from 'react-router-dom'
import './product.css'

// Simple card container to hold product information //
const Product = () => {
    return (
      <div>
        <div class="container">
          <div class="image">
            <img src="{product.img.src}" alt="{product description}"></img>
          </div>
            <div class="card-content">
              <div class="wrapper">
                <div class="title">product.name</div>
                <p>product.description</p>
                <span class="price">product.price</span>
                <div class="content size">
                  <div class="name size-name">Size</div>
                    <div class="size-value">
                      <span class="color">XS</span>
                      <span class="color">S</span>
                      <span class="active">M</span>
                      <span class="color">L</span>
                      <span class="color">XL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    )
    


}
export default Product;


// product card with materialize //
  //       <div className="row">
  //   <div className="col s12 m6">
  //     <div className="card white darken-1">
  //       <div className="card-content black-text">
  //         <span className="card-title">Card Title</span>
  //         <img src="{products.img.src}" alt="{products.description}"/>
  //         <p>This is where we'll put product description.</p>
  //       </div>
  //       <div className="card-action">
  //       <button>
  //       <Link to="/product-page" >Buy Now</Link>
  //       </button>
         
  
  //       </div>
  //     </div>
  //   </div>
  // </div>