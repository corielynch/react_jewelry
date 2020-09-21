import React from 'react';
import './product.css'
// import ProductsList from './productsList';



const Product = ({product}) => {
    const id= document.location + product.id + product.handle
    return (
      <div>
        <div className="container">
         <div className="wrapper"> </div>
            <span className="price">{product.price}</span>
                <div className="image">
                  <img src={product.img_src} alt={product.handle}></img>
                </div>
                <div className="card-content">
                  <div className="wrapper">
                    <div className="title">{product.title}</div>  
                      <p>{product.title}</p> 
                        <span className="price">{product.price}</span> 
                          <div className="content tag">
                            <div className="name tag-name">{product.tag}</div>
                              <div className="size-value">
                                <span className="category">{product.tag}</span>
                              </div>
                              <button><a href={id}>Buy Now</a></button>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
    );
}

export default Product;
