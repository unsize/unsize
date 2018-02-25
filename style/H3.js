import styled from 'styled-components';
import { halisFont } from './constants';

const H3 = styled.h3`
  font-family: ${halisFont};
  font-weight: bold;
  text-align: ${props => (props.align ? props.align : 'left')};
  margin-top: 0;
`;

export default H3;
