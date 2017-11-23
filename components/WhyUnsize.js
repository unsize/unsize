import React from 'react';
import { H1, H2 as _H2, H4, H5, H6, P, Button, Image } from 'style';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const QuoteWrapper = styled.div`
  position: relative;
  width: 100%;
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

const H2 = _H2.extend`
  background-image: url("/static/images/quote_background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px 0;
  margin: 0px 10px;

  @media (max-width: 768px) {
    margin: 0 30px;
    padding: 30px 0;
  }

  @media (max-width: 480px) {
    margin: 20px 0;
    background-size: contain;
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
