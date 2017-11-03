import styled, { css } from 'styled-components';
import {
  black,
  blue,
  blue90,
  borderSolid,
  borderRadiusLg,
  buttonColor,
  elemSpacingSm,
  elemSpacingMd,
  elemSpacingLg,
  fontSizeNormal,
  green,
  halisFont,
  transitionFastEase,
  white
} from './constants';

const Button = styled.button`
  display: block;
  position: relative;
  margin: ${elemSpacingSm} auto;
  padding: ${elemSpacingSm} ${elemSpacingLg};
  min-width: 100px;
  font-size: 18px;
  font-family: ${halisFont};
  font-weight: normal;
  border: none;
  outline: none;
  cursor: pointer;
  border: ${borderSolid} ${blue};
  background: ${white};
  color: ${blue};
  ${props => props.primary && css`
    background: ${blue90};
    color: ${white};
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${green};
      background-image: url('/static/images/button_boost.png');
      background-size: 200px;
      background-position: left;
      transform: translate(8px, 8px);
      transition: ${transitionFastEase};
      z-index: -1;
    }
    &:hover {
      &::after {
        transform: translate(4px, 4px);
      }
    }
  `}
`;

export default Button;
