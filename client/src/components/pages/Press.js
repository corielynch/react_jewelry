import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

const Press = () => {
  return (
    <div>
      <Card>
          <CardTitle>Press</CardTitle>
          <CardImg top width="50%" src="https://cdn.shopify.com/s/files/1/0755/2497/files/pro-02-Sb.jpg?9755218888888724393" alt="Card image cap" />
          <CardImg top width="50%" src="https://cdn.shopify.com/s/files/1/0755/2497/files/pro-10-Sb.jpg?6595014667589359006" alt="Card image cap" />
        <CardImg top width="50%" src="https://cdn.shopify.com/s/files/1/0755/2497/files/b_13.jpg?4037369015253632147" alt="Card image cap" />
        <CardImg top width="50%" src="https://cdn.shopify.com/s/files/1/0755/2497/files/2343.jpg?8870773803078067130" alt="Card image cap" />
      <CardBody>
          <CardText>Check out all the beautiful jewelry on the beautiful clients.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Press;
