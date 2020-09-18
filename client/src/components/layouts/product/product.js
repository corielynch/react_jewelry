import React from 'react';
import './product.css'



const Product = (props) => {
//  class Product extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        title: props.title,
//        tags: props.tags,
//        price: props.price,
//        handle: props.handle,
//        img: props.img_src,
//        key: props.id

//      }
 
  // const Product = (props) => {

//     const title = props.products.map( products => {
//       return products.title
//     })
//     const image = props.products.map ( products => {
//       return products.img_src
//     })
// console.log(image)
// render() {
    return (
      <div>
        <div className="container">
         <div className="wrapper"> </div>
            <span className="price">{props.price}</span>
                <div className="image">
                  <img src={props.img} alt={props.handle}></img>
                </div>
                <div className="card-content">
                  <div className="wrapper">
                    {/* <div className="title">{props.title}</div>  */}
                      {/* <p>{title}</p>  */}
                        <span className="price">{props.price}</span> 
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
  // }
}

export default Product;

