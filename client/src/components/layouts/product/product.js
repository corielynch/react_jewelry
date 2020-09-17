import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './product.css'
// import '../../../../../server'

// Simple card container to hold product information //
class Product extends React.Component{
// const Product = () => {

componentDidMount(){
  axios.get('/api/search-products', {
  }).then((response) => {
    console.log(response)
  })
}


  render(){
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
                <div className="content tag">
                  <div className="name tag-name">Tag</div>
                    <div className="size-value">
                      <span className="category">Category</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
  }
}
export default Product;

