import styled from 'styled-components';
import { borderSolidBlack, borderRadiusLg, buttonColor, elemSpacingSm, elemSpacingMd, halisFont, fontSizeNormal } from './constants';

const Button = styled.button`
  font-family: ${halisFont};
  background: ${props => props.primary ? 'black' : 'white'};
  color: ${props => props.primary ? 'white' : 'black'};
  width: ${props => props.width ? props.width : '200px'};
  height: 40px;
  border-radius: ${borderRadiusLg};
  border: ${borderSolidBlack};
  margin: ${elemSpacingSm} auto;
  font-size: ${fontSizeNormal};
  display: block;
`;

export default Button;
