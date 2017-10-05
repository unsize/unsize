import styled from 'styled-components';
import { halisFont } from './constants';

const Button = styled.button`
  font-family: ${halisFont};
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background: none;
  border-style: solid;
  border-width: 1px;
  border-color: #000;
  margin: 20px auto;
  font-size: 16px;
  display: block;
`;

export default Button;
