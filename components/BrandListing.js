import React from 'react';
import styled from 'styled-components';
import { Image, H4 } from 'style';
import { Col, Row } from 'react-flexbox-grid-plus';
import Link from 'next/link';

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

const RowWrapper = styled.div`
  height: 300px;
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const BrandListing = () => {
  return (
    <RowWrapper>
      <Row style={{ height: '100%' }}>
        <Col lgWidth={10} xsWidth={10} lgXOffset={1} xsXOffset={1}>
          <H4 align="center">
            We’ve partnered with the following brands for the official launch of
            our Chrome extension
          </H4>
        </Col>
        <Col
          lgWidth={10}
          smWidth={12}
          xsWidth={12}
          lgXOffset={1}
          smXOffset={0}
          xsXOffset={0}
          lgYOffset={3}
          smYOffset={2}
          xsYOffset={5}
        >
          <BrandWrapper>
            <a href="http://us.asos.com/" target="_blank">
              <Image
                height="50px"
                border="yellow"
                src="/static/images/retailers/asos.png"
              />
            </a>

            <a href="https://www.shopstyle.com/" target="_blank">
              <Image
                height="50px"
                border="green"
                src="/static/images/retailers/shopstyle.png"
              />
            </a>
            <a href="https://www.lyst.com/" target="_blank">
              <Image
                height="50px"
                border="pink"
                src="/static/images/retailers/lyst.png"
              />
            </a>
          </BrandWrapper>
        </Col>
      </Row>
    </RowWrapper>
  );
};

export default BrandListing;
