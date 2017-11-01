import styled, {keyframes} from 'styled-components';
import { elemSpacingSm, transitionLargeObject } from 'style/constants';

const bottomLeft = keyframes`
  from {
    transform: translate(-100%, 100%);
  }
  to {
    transform: translate(0, 0);
  }
`;

const bottomRight = keyframes`
  from {
    transform: translate(100%, 100%);
  }
  to {
    transform: translate(0, 0);
  }
`;

const WindowCorners = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: ${elemSpacingSm};
  position: relative;
  overflow: hidden;
  &::before, &::after {
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
    animation: ${bottomLeft} ${transitionLargeObject};
  }
  &::after {
    right: 0;
    background-image: url('/static/images/right_corner.png');
    background-position: right bottom;
    animation: ${bottomRight} ${transitionLargeObject};
  }
`;

export default WindowCorners;
