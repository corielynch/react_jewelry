import React from 'react';
import './product.css';

// Product component renders a single product card from the productlist component //
const Product = (props) => {
  const handleClick = (e) => {
    if (props.id in props.cart) {
      props.removeItemFromCart(props.id);
    } else {
      props.addItemToCart(props.id, 1);
    }
  }
  return (
    <div className="container" onClick={handleClick}>
      <div className="wrapper"> </div>
      <span className="price">{props.price}</span>
      <div className="image">
        <img src={props.img_src} alt={props.handle}></img>
      </div>
      <div className="card-content">
        <div className="wrapper">
          <div className="title">{props.title}</div>
          <p>{props.title}</p>
          <span className="price">{props.price}</span>
          <div className="content tag">
            <div className="name tag-name">{props.tag}</div>
            <div className="size-value">
              <span className="category">{props.tag}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;

