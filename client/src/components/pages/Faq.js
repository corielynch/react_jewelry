import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

const Faq = () => {
  return (
    <div>
      <Card>
      <CardTitle><span>Custom to bring out your unique beauty</span></CardTitle>
        <CardImg top width="100%" src="https://cdn.shopify.com/s/files/1/0755/2497/files/b_13.jpg?4037369015253632147" alt="Card image cap" />
        <CardBody>
          <CardText><span> ALL PRODUCTS ARE MADE BY HAND SO PLEASE ALLOW 4-6 WEEKS FOR CREATION + DELIVERY.
        ALL ACIDS COLLECTION STYLES ALSO COME IN NON ACIDS AS WELL IN PLAIN 14 KT PLATED GOLD, ROSE GOLD PLATED, GUNMETAL PLATED, AND SILVER PLATED.
        PLEASE CONTACT MONA@MONAASSEMI.COM WITH YOUR ORDER NUMBER AND YOUR CHOICE OF METAL.
        JEWELRY, WILL BE THE CLOSEST VARIATION TO THE PIECES PICTURED WHEN SHIPPED. </span></CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Faq;
