import styled from 'styled-components';
import { elemSpacingXs, elemSpacingSm, elemSpacingMd } from 'style/constants';

const ScreenContainer = styled.div`
  padding-bottom: ${elemSpacingSm};
  h1 {
    margin-bottom: ${elemSpacingXs};
  }
  p {
    margin: 0;
  }
  button {
    margin-bottom: ${elemSpacingMd};
  }
`;

export default ScreenContainer;
