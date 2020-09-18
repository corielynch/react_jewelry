import React from 'react';
import './product.css'

// Simple card container to hold product information //
const Product = () => {
  return (
   <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" fluid />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>{product.price}</Card.Text>
      <Card.Text>{product.tag}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="warning">Buy Now</Button>
    </Card.Footer>
  </Card>
  
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" fluid />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.description}
      </Card.Text>
     <Button variant="warning">Buy Now</Button>
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
      <Button variant="warning">Buy Now</Button>
    </Col>
  </Form.Group>
        <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Card.Footer>
  </Card>
</CardDeck>

    );
}

export default Product;

