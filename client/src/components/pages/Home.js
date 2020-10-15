import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

const Faq = () => {
  return (
    <div>
      <Card>
      <CardTitle><span>Custom to bring out your unique beauty</span></CardTitle>
        <CardImg top width="50%" src="https://cdn.shopify.com/s/files/1/0755/2497/files/b_13.jpg?4037369015253632147" alt="Card image cap" />
        <CardImg top width="50%" src="//cdn.shopify.com/s/files/1/0755/2497/t/3/assets/slide-1-image.jpg?v=4443609049292117795" alt="Card image cap" />
        <CardImg top width="50%" src="https://cdn.shopify.com/s/files/1/0755/2497/files/b_13.jpg?4037369015253632147" alt="Card image cap" />
        <CardImg top width="50%" src="https://cdn.shopify.com/s/files/1/0755/2497/files/1152.jpg?8870773803078067130" alt="Card image cap" />
      </Card>
    </div>
  );
};

export default Faq;
