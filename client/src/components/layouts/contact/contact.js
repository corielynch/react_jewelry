import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const Cart = () => {
  return (
    <div>
      <Card>
      <CardTitle>Contact</CardTitle>
      <CardImg top width="50%" src="https://cdn.shopify.com/s/files/1/0755/2497/files/pro-02-Sa.jpg?9755218888888724393" alt="Card image cap" />
        <CardImg top width="50%" src="https://cdn.shopify.com/s/files/1/0755/2497/files/pro-03-Sa.jpg?17436661442076790054" alt="Card image cap" />
        <CardBody>
          <CardSubtitle>Love hearing from you</CardSubtitle>
          <CardText>Mona likes to always do what's progressive as an emerging designer.
             You can see her evolve throughout collections aesthetically.  Her biggest and most exciting 
             challenge is to always exceed the lines of what is considered ordinary. She enjoys outside
              the box accessories. Her work is truly a passion for the art of jewelry. The collections are always 
              fresh, high-end and with edge. In her current collection she has most recently incorporated color 
              with an array of different hues of swarovski crystals. What is said to be her greatest talent is the
               knack for trend forecasting. Editors are always 
            anticipating Mona's next collection as it is bound to be even better than the last. </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cart;
