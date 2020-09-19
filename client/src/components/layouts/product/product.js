// import React from 'react';
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';

<<<<<<< HEAD
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

=======
// const Cart = () => {
//   return (
//     <div>
//       <Card>
//         <CardImg top width="100%" src="'../../assets/mona.png" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Card title</CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button variant="warning">Buy Now</Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Cart;
>>>>>>> css
