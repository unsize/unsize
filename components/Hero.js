import React from 'react';
import { H1, H6, Button, Image } from 'style';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const StyledImage = styled.div`
  position: absolute;
  right: 0;
  height: 450px;
`;

export default class Hero extends React.Component {
  render() {
    return (
      <Row
        style={{
          marginTop: 100,
          position: 'relative',
          boxSizing: 'border-box',
          height: '450px'
        }}
      >
        <Col sm={6} xs={12}>
          <H1 align="left">Welcome to your best fit ever.</H1>
          <H6>
            Enough is enough. It's time to unbox ourselves and wear what we want
            to, in clothing that feels amazing, because why not?
          </H6>
          <Button primary>Get Started</Button>
        </Col>
        <StyledImage>
          <Image height="450px" src="/static/images/hero.png" />
        </StyledImage>
      </Row>
    );
  }
}
