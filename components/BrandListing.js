import React from 'react';
import styled from 'styled-components';
import { Image, H4 } from 'style';
import { Col, Row } from '/Users/Jon/Desktop/unsize/components/grid';

const BrandWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;

  img {
    margin: 10px 0;
    max-height: 40px;
    @media (max-width: 768px) {
      max-height: 30px;
      height: auto;
      width: auto;
    }
  }
`;

const BrandListing = () => {
  return (
    <Row style={{ height: '400px' }}>
      <Col lgWidth={10} xsWidth={10} lgXOffset={1} xsXOffset={1}>
        <H4 align="center">
          We’ve partnered with the following brands for the official launch of
          our Chrome extension
        </H4>
      </Col>
      <Col
        lgWidth={10}
        xsWidth={12}
        lgXOffset={1}
        xsXOffset={0}
        lgYOffset={3}
        xsYOffset={5}
      >
        <BrandWrapper>
          <Image
            height="50px"
            border="yellow"
            src="/static/images/retailers/asos.png"
          />
          <Image
            height="50px"
            border="green"
            src="/static/images/retailers/shopstyle.png"
          />
          <Image
            height="50px"
            border="pink"
            src="/static/images/retailers/lyst.png"
          />
        </BrandWrapper>
      </Col>
    </Row>
  );
};

export default BrandListing;
