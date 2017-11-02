import React from 'react';
import styled from 'styled-components';
import { elemSpacingSm, easingLargeObject } from 'style/constants';

const transitionTime = 500;

const Corners = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: ${elemSpacingSm};
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: -1;
  &::before, &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
    transition: ${transitionTime}ms ${easingLargeObject};
    transform: translate(0, 0);
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
  &.hidden {
    &::before {
      transform: translate(-100%, 100%);
    }
    &::after {
      transform: translate(100%, 100%);
    }
  }
`;

export default class WindowCorners extends React.Component {
  constructor(props) {
    super(props);
    this.hideCorners = this.hideCorners.bind(this);
    this.state = {
      hidden: true
    };
  }

  componentDidMount() {
    setTimeout(function() {
      this.setState({
        hidden: false
      });
    }.bind(this), 100);
  }

  hideCorners(callback) {
    this.setState({
      hidden: true
    });
    setTimeout(callback, transitionTime);
  }

  render() {
    return <Corners className={this.state.hidden ? 'hidden' : null} />;
  }
}
