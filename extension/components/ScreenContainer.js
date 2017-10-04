import styled from 'styled-components';
import { background } from 'style/constants';

const ScreenContainer = styled.div`
  background-color: ${ background };
  min-width: 500px;
  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export default ScreenContainer;
