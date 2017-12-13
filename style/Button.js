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
  position: relative;
  margin: ${elemSpacingSm} auto;
  padding: 8px ${elemSpacingSm};
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
  border-radius: 0;
  &:disabled {
    border-color: #7a90fd;
    color: #7a90fd;
  }
  ${props =>
    !props.primary &&
    css`
      transition: 0.1s ease;
      &:hover {
        background-color: ${blue90};
        color: ${white};
      }
    `};
  ${props =>
    props.primary &&
    css`
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
        transform: translate(0px, 0px);
        transition: 0.1s ease;
        z-index: -1;
      }
      &:hover {
        &::after {
          transform: translate(8px, 8px);
        }
        &:disabled {
          &::after {
            transform: translate(0px, 0px);
          }
        }
      }
      &:disabled {
        background-color: #7a90fd;
        border-color: #7a90fd;
        color: ${white};
      }
    `} ${props =>
      props.image &&
      css`
        background-color: ${white};
        background-image: url(${props.image});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 50px;
      `};
`;

export default Button;
