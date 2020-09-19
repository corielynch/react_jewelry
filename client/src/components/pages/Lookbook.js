import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

const Lookbook = () => {
  return (
    <div>
      <Card>
      <CardTitle>Lookbook</CardTitle>
        <CardImg top width="100%" src="//cdn.shopify.com/s/files/1/0755/2497/t/3/assets/slide-3-image.jpg?v=4637080155673407017" alt="Card image cap" />
        <CardBody>
          <CardText>Check out all the beautiful jewelry on the beautiful models.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Lookbook;