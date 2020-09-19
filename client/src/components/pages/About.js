import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const About = () => {
  return (
    <div>
      <Card>
      <CardTitle>About</CardTitle>
      <CardImg top width="50%" src="https://cdn.shopify.com/s/files/1/0755/2497/files/b_13.jpg?4037369015253632147" alt="Card image cap" />
       <CardImg top width="50%" src="https://cdn.shopify.com/s/files/1/0755/2497/files/pro-08.jpg?351932033806436885" alt="Card image cap" />
      <CardBody>
          <CardText> Descended from 2500 years of jewelry addicts, the Persian-American designer, Mona Assemi's namesake brand was founded in Washington DC. Currently residing in New York City, Mona's work combines sculptural clean lines, 
        sumptuous crystals, and elegant metals. She creates a liquid dripping aesthetic frozen in time 
        in the jewelry with an array of formulated acids for her signature ACIDS line. The unusual 14kt plated, 
        silver plated, rose gold plated and gunmetal plated pieces have a chic sheen, yet distressed at the same 
        time for the downtown meets uptown girl. Recent collections have included unusual shapes and sculptural protruding elements. Currently residing in New York City, Mona's work combines sculptural clean lines, sumptuous crystals, and elegant metals. She creates a liquid dripping aesthetic frozen in time in the jewelry with an array of formulated acids for her signature ACIDS line. The unusual 14kt plated, silver plated, rose gold plated and gunmetal plated pieces have a chic sheen, yet distressed at the same time for the downtown meets uptown girl. Recent collections have included unusual shapes and sculptural protruding elements.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
