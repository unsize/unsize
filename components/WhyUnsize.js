import React from 'react';
import { H1, H2 as _H2, H4, H5, H6, P, Button, Image } from 'style';
import styled from 'styled-components';
import { setInterval, clearInterval } from 'timers';
import { Col, Row } from '/Users/Jon/Desktop/unsize/components/grid';

const Quote = _H2.extend`
  background-image: url("/static/images/quote_background.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 50px 0;
  margin: 0;

  @media (max-width: 768px) {
    margin: 0 30px;
    padding: 30px 0;
  }

  @media (max-width: 480px) {
    margin: 20px 0;
    background-size: contain;
  }
`;

const ContentWrapper = styled.div`
  @media (min-width: 769px) {
    margin: 30px 100px;
  }
`;

export default class WhyUnsize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caretVisible: true
    };
    this.interval = setInterval(() => {
      this.setState(old => {
        return { caretVisible: !old.caretVisible };
      });
    }, 750);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getCaret = () => (this.state.caretVisible ? '|' : '&nbsp;');

  render() {
    return (
      <Row style={{ maxHeight: '475px' }}>
        <Col lgWidth={10} lgXOffset={1} xsWidth={10} xsXOffset={1} id="why">
          <H1 align="center">Why Unsize?</H1>
          <H4 align="center">You said:</H4>
          <Quote align="center">
            My thighs aren't made for jeans
            <code dangerouslySetInnerHTML={{ __html: this.getCaret() }} />
          </Quote>
          <H5 align="center">
            You talked and we listened. After some research we came up with a
            way to remove the frustration and difficulty from online shopping.
          </H5>
        </Col>
      </Row>
    );
  }
}
