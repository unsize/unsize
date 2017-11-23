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
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export default class Why extends React.Component {
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
        <Row style={{ marginTop: 50 }}>
          <Col sm={4} xs={12} smOffset={1}>
            <H2 align="left">Meet Tailor</H2>
            <H6>Great things come in small packages.</H6>
            <P>
              Meet our hardware! Ain't she a beaut? Aptly and affectionately
              called Tailor, our smart device can take your measurements
              accurately (up to an 1/8th of an centimeter)! The device will then
              send your measurements to our chrome extension via bluetooth and
              filter the clothing options by fit for you!
            </P>
            <Button primary>Pre-order</Button>
          </Col>
          <Col sm={5} xs={12} smOffset={1}>
            <Image
              width="100%"
              height="100%"
              src="/static/images/meet_tailor.png"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: 50 }}>
          <Col sm={5} xs={12} smOffset={1}>
            <Image width="100%" src="/static/images/extension.png" />
          </Col>
          <Col sm={4} xs={12} smOffset={1}>
            <H2 align="left">Chrome Extension</H2>
            <H6>Magic's Never Looked So Good</H6>
            <P>
              This is the age of the internet, and we here at unsize understand
              that. To try to combat the over-abundance of internet information,
              we created a chrome extension. Our extention works with our
              partnered sites to automatically determine the ideal size for you
              based on your given measurements. The extension is with you
              through your entire shopping experience, ensuring a smooth, sunny
              surf on the web.
            </P>
            <Button primary>Get Started</Button>
          </Col>
        </Row>
        <Row style={{ marginTop: 50 }} center="xs">
          <Col xs={12}>
            <H4>
              We’ve partnered with the following brands for the official launch
              of our chrome extension
            </H4>
          </Col>
          <BrandWrapper>
            <Image height="50px" src="/static/images/retailers/asos.png" />
            <Image height="50px" src="/static/images/retailers/lyst.png" />
            <Image height="50px" src="/static/images/retailers/shopstyle.png" />
          </BrandWrapper>
        </Row>
      </div>
    );
  }
}
