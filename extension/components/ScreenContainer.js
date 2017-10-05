import styled from 'styled-components';
import { background, elemSpacingMd} from 'style/constants';

const ScreenContainer = styled.div`
  background-color: ${background};
  min-width: 500px;
  padding-bottom: ${elemSpacingMd};
  h1 {
    text-align: center;
    margin-bottom: ${elemSpacingMd};
  }
`;

export default ScreenContainer;
