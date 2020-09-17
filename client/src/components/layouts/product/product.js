import React from 'react';
import axios from 'axios'
import ProductsList from './productsList';
import './product.css'




// Simple card container to hold product information //
// class Product extends React.Component {
//   state = {products: []}
//   async componentDidMount(){
//     const response = await axios.get('/api/search-products', 
//     )
   
//     this.setState({products: response.data})
   
//   }
  
//   render(){
  const Product = (props) => {
    return (
      <div>
        <div className="container">
          <div className="image">
            {/* <img src="{product.img.src}" alt="{product description}"></img> */}
          </div>
            <div className="card-content">
              <div className="wrapper">
                {/* <div className="title">product.name</div> */}
                <p>product.description</p>
                <span className="price">product.price {this.state.products.length}</span>
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
    );
  }
    

export default Product;

