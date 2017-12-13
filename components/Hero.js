import React from 'react';
import { H1, H6, Button, Image, P } from 'style';
import styled from 'styled-components';
import { setInterval, clearInterval } from 'timers';
import { Col, Row } from 'react-flexbox-grid-plus';
import ContentContainer from './ContentContainer';
import Link from 'next/link';

export default class WhyUnsize extends React.Component {
  render() {
    return (
      <Row style={{ minHeight: '550px' }}>
        <Col
          lgWidth={6}
          mdWidth={6}
          smWidth={6}
          xsWidth={10}
          lgXOffset={0}
          xsXOffset={1}
          xsYOffset={0}
        >
          <H1 align="left">Welcome to your best fit ever.</H1>
          <Col lgWidth={5} mdWidth={5}>
            <P>
              Enough is enough. It's time to unbox ourselves and wear what we
              want to, in clothing that feels amazing, because why not?
            </P>
            <Link href="/#start" passHref prefetch>
              <Button primary>Get Started</Button>
            </Link>
          </Col>
        </Col>
        <ContentContainer
          width={[9, 9, 9, 12]}
          height={[10, 9, 8, 12]}
          x={[3, 3, 3, 0]}
          y={[0, 0, 0, 8]}
          z={[-5, -5, -5, -5]}
          img="/static/images/hero.png"
        />
      </Row>
    );
  }
}
