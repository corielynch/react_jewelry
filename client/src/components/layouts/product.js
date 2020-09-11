import React from 'react';
// import src from '*.bmp';
import { Link} from 'react-router-dom'

const products = [
        {
        "img": "./src",
        "productName": "Earing",
        "price": "$1.99",
        "prodDesc": "Short Description here"
    },
    {
        "img": "./src",
        "productName": "Necklace",
        "price": "$2.99",
        "prodDesc": "Short Description here"
    },
    {
        "img": "./src",
        "productName": "Bracelet",
        "price": "$3.99",
        "prodDesc": "Short Description here"
    }
    ]
    console.log(products)



const Product = () => {
    return (
        <div className="row">
    <div className="col s12 m6">
      <div className="card white darken-1">
        <div className="card-content black-text">
          <span className="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
        {/* <Route path='/' exact component={Shop} /> */}
         <Link to="/product-page" >Buy Now</Link>
  
        </div>
      </div>
    </div>
  </div>
    )
    


}
export default Product;
