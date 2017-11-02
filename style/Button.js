import styled from 'styled-components';
import {
  black,
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
  background: ${blue90};
  color: ${white};
  font-size: 18px;
  font-family: ${halisFont};
  font-weight: normal;
  border: none;
  outline: none;
  cursor: pointer;
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
    transform: translate(6px, 6px);
    transition: ${transitionFastEase};
    z-index: -1;
  }
  &:hover {
    &::after {
      transform: translate(3px, 3px);
    }
  }
`;

export default Button;
