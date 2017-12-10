import React from 'react';
import { H1, H6, Button, Image, P } from 'style';
import styled from 'styled-components';
import { setInterval, clearInterval } from 'timers';
import { Col, Row } from '/Users/Jon/Desktop/unsize/components/grid';
import ContentContainer from './ContentContainer';

const StyledImage = Image.extend`
  position: absolute;
  ${({ layout }) => (layout === 'left' ? 'right: 0' : 'left: 0')};
  top: 0;
  min-height: ${({ height }) => (height ? height : 'auto')};

  @media (max-width: 768px) {
    min-height: 0;
    height: ${({ tabletHeight }) => (tabletHeight ? tabletHeight : 'inherit')};
  }

  @media (max-width: 480px) {
    height: 100%;
    position: relative;
    padding: 20px;
    width: 90%;
  }
`;

const RowLayout = styled.section`
  min-height: ${({ height }) => (height ? height : 'auto')};
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  object-fit: contain;
  margin: 100px auto;

  h1 {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: ${({ tabletHeight }) => (tabletHeight ? tabletHeight : 'auto')};
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
`;

const TextLayout = styled.aside`
  margin-left: ${({ layout }) => (layout === 'left' ? '0' : 'auto')};
  max-width: 50%;
  min-width: 320px;
`;

export default class WhyUnsize extends React.Component {
  render() {
    return (
      <Row>
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
            <Button align="left" primary>
              Get Started
            </Button>
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
