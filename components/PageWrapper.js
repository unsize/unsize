import React from 'react';
import styled from 'styled-components';
import { screenWidth } from 'style/constants';

const PageWrapper = styled.article`
  max-width: ${screenWidth};
  margin: 100px auto 0;

  @media (max-width: ${screenWidth}) {
    margin: 100px 60px 0;
  }

  @media (max-width: 768px) {
    margin: 100px 0px 0;
  }
`;

export default PageWrapper;
