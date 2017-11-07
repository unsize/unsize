import React from 'react';
import { H4, P, Input, Button, Logo, Image, Link } from 'style';

import { Row, Col } from 'react-flexbox-grid';

export default class Footer extends React.Component {
  render() {
    var inline = {
      display: 'inline',
      margin: '0 15px'
    };
    return (
      <div>
        <Row style={{ marginTop: 100 }}>
          <Col xs={12}>
            <H4 align="left">Find a fit that makes you feel good.</H4>
            <P>Leave your email here and join the sizing revolution</P>
            <Row>
              <Input />
              <Button primary width="120px">
                Subscribe
              </Button>
            </Row>
          </Col>
        </Row>
        <Row
          style={{ marginTop: 40, marginBottom: 40 }}
          between="sm"
          bottom="xs"
        >
          <Col sm={4} md={3} xs={12}>
            <Row bottom="xs" center="xs">
              <Col sm={4} xs={3} xsOffset={1} smOffset={0}>
                <Logo height={'80px'} width={'80px'} />
              </Col>
              <Col sm={8} xs={6}>
                <Link
                  style={{
                    display: 'block',
                    margin: '10px 4px',
                    textAlign: 'left'
                  }}
                >
                  hello@unsize.me
                </Link>
                <Link
                  style={{
                    display: 'block',
                    margin: '10px 4px',
                    textAlign: 'left'
                  }}
                >
                  (xxx)-xxx-xxxx
                </Link>
              </Col>
            </Row>
          </Col>
          <Col
            lg={3}
            md={3}
            sm={4}
            xs={8}
            xsOffset={2}
            style={{ marginTop: '20px' }}
          >
            <Row center="xs" around="xs">
              <Image height={'35px'} width={'35px'} style={inline} />
              <Image height={'35px'} width={'35px'} style={inline} />
              <Image height={'35px'} width={'35px'} style={inline} />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
