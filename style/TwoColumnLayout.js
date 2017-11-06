import styled from 'styled-components';
import { elemSpacingXs } from './constants';

const TwoColumnLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  flex-direction: row;
  & > * {
    width: 40%;
    margin: ${elemSpacingXs};
  }
`;

export default TwoColumnLayout;
