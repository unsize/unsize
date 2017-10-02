import styled from 'styled-components';
import { halisFont } from './constants';

const Button = styled.button`
  background: rgb(216, 216, 216);
  border: 2px solid #000;
  border-radius: 10px;
  font-family: ${halisFont};
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
`;

export default Button;
