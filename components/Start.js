import React from 'react';
import { H1, H3 as _H3, H4, H5 as _H5, Image, Button } from 'style';
import { Col, Row } from '/Users/Jon/Desktop/unsize/components/grid';
import styled from 'styled-components';
import ContentContainer from './ContentContainer';

const H3 = _H3.extend`
  margin-bottom: 0;
`;

const H5 = _H5.extend`
  margin: 10px auto;
`;

const Wrapper = styled.div`
  margin: 100px auto 0;
  max-width: 900px;
`;

export default class Start extends React.Component {
  render() {
    return (
      <div>
        <Row style={{ height: '100px' }}>
          <Col lgWidth={10} lgXOffset={1}>
            <H1 align="left">Get Started</H1>
          </Col>
        </Row>
        <Row style={{ height: '400px' }}>
          <Col
            lgWidth={4}
            lgXOffset={1}
            xsWidth={10}
            xsXOffset={1}
            xsYOffset={11}
          >
            <H3>Step 1</H3>
            <H5>
              Figure out your measurements with the help of Tailor, our
              bluetooth measuring device.
            </H5>
            <Button style={{ marginRight: '5px' }}> Learn more </Button>
            <Button primary>Pre-order</Button>
          </Col>
          <ContentContainer
            width={[5, 5, 5, 12]}
            height={[7, 6, 6, 10]}
            x={[6, 6, 6, 0]}
            y={[0, 0, 0, 0]}
            z={[0, 0, 0, 0]}
            img="https://media.giphy.com/media/xT1R9yrDcsDL5t65DW/giphy.gif"
          />
        </Row>
        <Row style={{ height: '400px' }}>
          <Col
            lgWidth={4}
            lgXOffset={1}
            xsWidth={10}
            xsXOffset={1}
            xsYOffset={6}
          >
            <H3>Step 2</H3>
            <H5>
              Download our Chrome Extension and automatically sync your
              measurements with Tailor.
            </H5>
            <Button style={{ marginRight: '5px' }}> Learn more </Button>
            <Button primary>Download</Button>
          </Col>
          <ContentContainer
            width={[5, 5, 5, 12]}
            height={[7, 6, 6, 6]}
            x={[6, 6, 6, 0]}
            y={[0, 0, 0, 0]}
            z={[0, 0, 0, 0]}
            img="/static/images/step_2.png"
          />
        </Row>
        <Row style={{ height: '400px' }}>
          <Col
            lgWidth={4}
            lgXOffset={1}
            xsWidth={10}
            xsXOffset={1}
            xsYOffset={6}
          >
            <H3>Step 3</H3>
            <H5>
              Get shopping! Our extension works with a number of sites to choose
              the best size for you based on your measurements.
            </H5>
          </Col>
          <ContentContainer
            width={[5, 5, 5, 12]}
            height={[7, 6, 6, 6]}
            x={[6, 6, 6, 0]}
            y={[0, 0, 0, 0]}
            z={[0, 0, 0, 0]}
            img="/static/images/step_1.png"
          />
        </Row>
      </div>
    );
  }
}
