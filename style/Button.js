import styled from 'styled-components';
import { border, borderRadius, buttonColor, halisFont, pSize } from './constants';

const Button = styled.button`
  background: ${buttonColor};
  border: ${border};
  border-radius: ${borderRadius};
  font-family: ${halisFont};
  font-size: ${pSize};
  padding: 8px 24px;
`;

export default Button;
