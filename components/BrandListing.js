import React from 'react';
import styled from 'styled-components';
import { Image, H4 } from 'style';
import RowWrapper from '../components/RowWrapper';

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
    <RowWrapper>
      <H4 align="center">
        We’ve partnered with the following brands for the official launch of our
        Chrome extension
      </H4>
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
    </RowWrapper>
  );
};

export default BrandListing;
