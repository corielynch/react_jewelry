import React from 'react';
import './product.css'

 
  const Product = (props) => {
    const title = props.products.map( products => {
      return products.title
    
    })
    console.log(title)
    return (
      <div>
        <div className="container">
        {/* {title.map((product) => (
           <div className="wrapper"> </div>
          ))} */}
        {/* {title.map((product) => ( */}
            {/* <span className="price">product.price {}</span>
          // <div source={product} key={product} /> */}
          {/* // ))} */}
        
          <div className="image">
            {/* <img src="{product.img.src}" alt="{product description}"></img> */}
          </div>
            <div className="card-content">
              <div className="wrapper">
                {/* <div className="title">product.name</div> */}
                {/* <p>{title}</p> */}
                {/* <span className="price">product.price {}</span> */}
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

