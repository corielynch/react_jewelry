import React from 'react';
import './product.css'

// Simple card container to hold product information //
const Product = () => {
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
export default Product;
//   <CardDeck>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" fluid />
//     <Card.Body>
//       <Card.Title>{product.name}</Card.Title>
//       <Card.Text>{product.price}</Card.Text>
//       <Card.Text>{product.tag}</Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <Button variant="warning">Buy Now</Button>
//     </Card.Footer>
//   </Card>
  
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" fluid />
//     <Card.Body>
//       <Card.Title>{product.name}</Card.Title>
//       <Card.Text>
//         {product.description}
//       </Card.Text>
//      <Button variant="primary">Buy Now</Button>
//     </Card.Body>
//   </Card>
  
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" fluid />
//     <Card.Body>
//       <Card.Title>{product.name}</Card.Title>
//       <Card.Description>
//          </Card.Description>
//     </Card.Body>
//     <Card.Footer>
//        <Form.Group as={Row}>
//     <Col sm={{ span: 10, offset: 2 }}>
//       <Button type="submit">Buy Now</Button>
//     </Col>
//   </Form.Group>
//         <Button animated='vertical'>
//       <Button.Content hidden>Shop</Button.Content>
//       <Button.Content visible>
//         <Icon name='shop' />
//       </Button.Content>
//     </Card.Footer>
//   </Card>
// </CardDeck>

//     );
// }

// export default Product;



