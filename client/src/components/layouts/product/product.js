import React from 'react';
import './product.css'
// import ProductsList from './productsList';



const Product = ({product}) => {
  
//     return (
//       <div>
//         <div className="container">
//          <div className="wrapper"> </div>
//             <span className="price">{product.price}</span>
//                 <div className="image">
//                   <img src={product.img_src} alt={product.handle}></img>
//                 </div>
//                 <div className="card-content">
//                   <div className="wrapper">
//                     <div className="title">{product.title}</div>  
//                       <p>{product.title}</p> 
//                         <span className="price">{product.price}</span> 
//                           <div className="content tag">
//                             <div className="name tag-name">{product.tag}</div>
//                               <div className="size-value">
//                                 <span className="category">{product.tag}</span>
//                               </div>
//                             </div>
//                           </div>
//                       </div>
//                     </div>
//                   </div>
  <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" fluid />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text></Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">product.price</small>
    </Card.Footer>
  </Card>
  
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" fluid />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.description}
      </Card.Text>
     <Button variant="primary">Buy Now</Button>
    </Card.Body>
  </Card>
  
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" fluid />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Description>
         </Card.Description>
    </Card.Body>
    <Card.Footer>
       <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Buy Now</Button>
    </Col>
  </Form.Group>
//         <Button animated='vertical'>
//       <Button.Content hidden>Shop</Button.Content>
//       <Button.Content visible>
//         <Icon name='shop' />
//       </Button.Content>
    </Card.Footer>
  </Card>
</CardDeck>

    );
}

export default Product;



