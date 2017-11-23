import React from 'react';
import { H1, H2, H4, H5, H6, P, Button, Image } from 'style';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const QuoteWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const QuoteBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -25px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 115px;
  z-index: -1;
`;

const BrandWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;

  img {
    margin: 10px 0;
  }
`;

export default class WhyUnsize extends React.Component {
  render() {
    return (
      <div>
        <Row style={{ marginTop: 100 }}>
          <Col xs={12}>
            <H1>Why Unsize?</H1>
            <div>
              <H4>You said:</H4>
              <QuoteWrapper>
                <H2>My thighs aren't made for jeans|</H2>
                <QuoteBackground>
                  <Image
                    height="100%"
                    src="/static/images/quote_background.png"
                  />
                </QuoteBackground>
              </QuoteWrapper>
              <Row center="xs">
                <Col xs={10}>
                  <H5>
                    You talked, and we listened. After our extensive user
                    research, we came up with a two part system to help remove
                    the frustration and difficulty from online shopping.
                  </H5>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
