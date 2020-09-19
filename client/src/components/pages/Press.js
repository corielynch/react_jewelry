import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

const Press = () => {
  return (
    <div>
      <Card>
          <CardTitle>Press</CardTitle>
        <CardImg top width="100%" src="//cdn.shopify.com/s/files/1/0755/2497/t/3/assets/slide-2-image.jpg?v=4556533280222891033" alt="Card image cap" />
        <CardBody>
          <CardText>Check out all the beautiful jewelry on the beautiful clients.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Press;
