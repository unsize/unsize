import styled from 'styled-components';
import { halisFont } from './constants';

const H5 = styled.h5`
  font-family: ${halisFont};
  font-weight: bold;
  text-align: ${props => props.align ? props.align : "center"};
`;

export default H5;
