import React from 'react';
import styled from 'styled-components';
import { screenWidth, tabletWidth } from 'style/constants';

const PageWrapper = styled.article`
  max-width: ${screenWidth};
  margin: 125px auto 0;

  @media (max-width: ${screenWidth}) {
    max-width: ${tabletWidth};
    margin: 125px auto 0;
  }

  @media (max-width: ${tabletWidth}) {
    margin: 125px 15px 0;
  }
`;

export default PageWrapper;
