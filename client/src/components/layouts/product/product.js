import React from 'react';
<<<<<<< HEAD
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
=======
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';
>>>>>>> 8ea4326ebbdf3d2b4ae4fd6e39826b7d01c25b91

// Product component renders a single product card from the productlist component //
const Product = ({product}) => {
  
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
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
    );
}
export default Product;

