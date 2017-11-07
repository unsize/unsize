import styled from 'styled-components';
import { halisFont } from './constants';

const H1 = styled.h1`
  font-family: ${halisFont};
  font-size: 30px;
  font-weight: normal;
  text-align: ${props => (props.align ? props.align : 'center')};
  margin: 10px 0px;
`;

export default H1;
