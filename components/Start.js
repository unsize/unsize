import React from 'react';
import { H1, H3, H4, H5, Image } from 'style';
import { Row, Col } from 'react-flexbox-grid';

export default class Start extends React.Component {
  render() {
    return (
      <div>
        <Row style={{ marginTop: 100 }}>
          <Col sm={12} xs={12}>
            <H1 align="left">Get Started</H1>
          </Col>
          <Col sm={6} xs={12}>
            <H3 align="left">Step 1</H3>
            <H5 align="left">
              Join the sizing revolution and figure out your size
            </H5>
            <Image
              width="100%"
              height={450}
              src="http://placebear.com/500/400"
            />
          </Col>
          <Col sm={6} xs={12}>
            <H3 align="left">Step 2</H3>
            <H5 align="left">
              Download our Chrome Extension and start shopping personally
              online.
            </H5>
            <Image
              width="100%"
              height={450}
              src="http://placebear.com/500/400"
            />
          </Col>
        </Row>
      </div>
    );
  }
}
