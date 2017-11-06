import styled from 'styled-components';
import { 
  black, 
  borderSolid, 
  borderRadiusLg, 
  buttonColor, 
  elemSpacingSm, 
  elemSpacingLg, 
  halisFont, 
  fontSizeNormal 
} from './constants';

const Button = styled.button`
  font-family: ${halisFont};
  background: ${props => props.primary ? 'black' : 'white'};
  color: ${props => props.primary ? 'white' : 'black'};
  width: ${props => (props.width ? props.width : '200px')};
  height: ${elemSpacingLg};
  border-radius: ${borderRadiusLg};
  border: ${borderSolid} ${black};
  margin: ${elemSpacingSm} 0;
  font-size: ${fontSizeNormal};
  display: block;
`;

export default Button;
