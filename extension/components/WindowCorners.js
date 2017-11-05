import React from 'react';
import styled from 'styled-components';
import { elemSpacingSm, easingLargeObject } from 'style/constants';

const WindowCorners = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: -1;
  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
  }
  &::before {
    left: 0;
    background-image: url('/static/images/left_corner.png');
    background-position: left bottom;
  }
  &::after {
    right: 0;
    background-image: url('/static/images/right_corner.png');
    background-position: right bottom;
  }
`;

export default WindowCorners;
