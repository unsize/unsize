import React from 'react';
import { Button, Lockup, Link } from 'style';
import { Row, Col } from 'react-flexbox-grid';

export default class Nav extends React.Component {
  render() {
    var background = {
      height: '70px',
      backgroundColor: '#ffffff',
      position: 'fixed',
      left: '0px',
      top: '0px',
      width: '100vw',
      margin: '0px'
    };
    var lockup = {
      position: 'relative',
      left: '10px',
      display: 'inline'
    };
    var linkSection = {
      position: 'relative',
      right: '10px',
      display: 'inline'
    };
    var inline = {
      display: 'inline',
      margin: '0 15px'
    };
    return (
      <Row style={background} between="xs" middle="xs">
        <Col sm={2}>
          <Lockup style={lockup} />
        </Col>
        <Col>
          <Link style={inline} href="#">
            About
          </Link>
          <Link style={inline} href="#">
            Why Unsize?
          </Link>
          <Button style={inline} primary width="80px">
            Join
          </Button>
        </Col>
      </Row>
    );
  }
}
