import React from 'react';
import styled, { css } from 'styled-components';
import { blue, borderSolid, elemSpacingSm, green, pink, white, yellow } from 'style/constants';

const Container = styled.button`
  display: block;
  position: relative;
  margin: ${elemSpacingSm} 0;
  min-width: 100px;
  height: 50px;
  border: ${borderSolid};
  outline: none;
  cursor: pointer;
  background-color: ${white};
  position: relative;
  ${props => props.pink && css`
    border-color: ${pink};
  `}
  ${props => props.green && css`
    border-color: ${green};
  `}
  ${props => props.yellow && css`
    border-color: ${yellow};
  `}
  ${props => props.blue && css`
    border-color: ${blue};
  `}
`;

const Logo = styled.img.attrs({
  src: props => props.logo
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 50%;
  max-width: 70%;
`;

export default class Retailer extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <Logo logo={this.props.logo} />
      </Container>
    );
  }
}
