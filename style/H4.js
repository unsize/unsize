import styled from 'styled-components';
import { halisFont } from './constants';

const H4 = styled.h4`
  font-family: ${halisFont};
  font-weight: bold;
  text-align: ${props => (props.align ? props.align : 'left')};
`;

export default H4;
