import styled from 'styled-components';
import { halisFont } from './constants';

const H1 = styled.h1`
  font-family: ${halisFont};
  font-weight: normal;
  text-align: ${props => (props.align ? props.align : 'center')};
`;

export default H1;
