import React from 'react';
import { H1, H6, Button, Image } from 'style';
import { Row, Col } from 'react-flexbox-grid';

export default class Hero extends React.Component {
  render() {
    return (
      <Row style={{ marginTop: 100 }}>
        <Col sm={6} xs={12}>
          <H1 align="left">Welcome to your best fit ever.</H1>
          <H6>
            Enough is enough. It's time to unbox ourselves and wear what we want
            to, in clothing that feels amazing, because why not?
          </H6>
          <Button primary width="120px">
            Get Started
          </Button>
        </Col>
        <Col sm={5} smOffset={1} xs={12}>
          <Image width="100%" height={450} src="http://placebear.com/700/400" />
        </Col>
      </Row>
    );
  }
}
