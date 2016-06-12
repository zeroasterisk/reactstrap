import React from 'react';
import { Card, CardHeader, CardFooter, CardImg, CardImgOverlay, CardText,
  CardBlock, CardTitle, CardSubtitle, } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader>Card header</CardHeader>
          <CardImg top width="100%" src="/assets/logo.png" alt="Card image cap" />
          <CardBlock>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBlock>
          <CardFooter>Card footer</CardFooter>
        </Card>
      </div>
    );
  }
}
