import styled from 'styled-components';
import { background, elementSpacing } from 'style/constants';

const ScreenContainer = styled.div`
  background-color: ${background};
  min-width: 500px;
  padding-bottom: ${elementSpacing};
  h1 {
    text-align: center;
    margin-bottom: ${elementSpacing};
  }
`;

export default ScreenContainer;
