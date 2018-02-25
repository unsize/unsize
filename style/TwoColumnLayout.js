import styled from 'styled-components';
import { elemSpacingXs, elemSpacingMd } from './constants';

const TwoColumnLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column wrap;
  flex-direction: row;
  & > * {
    width: 45%;
    margin: ${elemSpacingXs};
  }
`;

export default TwoColumnLayout;
