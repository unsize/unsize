import React from 'react';
import { H1, P, H6, Image } from 'style';
import { Row, Col } from 'react-flexbox-grid';

export default class About extends React.Component {
  render() {
    return (
      <Row style={{ marginTop: 100 }}>
        <Col sm={5} xs={12}>
          <Image width="100%" height={450} src="http://placebear.com/450/400" />
        </Col>
        <Col smOffset={1} sm={6} xs={12}>
          <H1 align="left">About</H1>
          <H6>
            Unsize sprouted from the idea that everyone has the right to find a
            fit that makes them feel good!
          </H6>
          <P>
            Throughout the years, the ready to wear clothing industry has asked
            us to “fit in, to stand out” in order to love ourselves, but it has
            never consistently guaranteed that clothes will fit the way they
            were meant to. In an age where we can customize almost anything,
            conviently finding your size when shopping online has yet to become
            accessible to the average consumer, and it is not for lack of
            demand.
          </P>
          <P>
            In a market space of 30 million bodies to clothe and a 2 billion
            dollar market opportunity size, unsize uses the intersection of
            technology and design to provide immediate services to find
            customers clothes that fit and feel good.
          </P>
        </Col>
      </Row>
    );
  }
}
