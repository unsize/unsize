import styled from 'styled-components';
import { halisFont } from './constants';

const H4 = styled.h4`
  font-family: ${halisFont};
  text-align: ${props => (props.align ? props.align : 'left')};
  color: #4a4a4a;
`;

export default H4;
