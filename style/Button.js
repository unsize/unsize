import styled from 'styled-components';
import { borderSolidBlack, borderRadiusLg, buttonColor, elemSpacingSm, elemSpacingMd, halisFont, pSize } from './constants';

const Button = styled.button`
  background: ${buttonColor};
  border: ${borderSolidBlack};
  border-radius: ${borderRadiusLg};
  font-family: ${halisFont};
  font-size: ${pSize};
  padding: ${elemSpacingSm} ${elemSpacingMd};
`;

export default Button;
