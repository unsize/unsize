import React from 'react';
import styled, { css } from 'styled-components';
import { elemSpacingSm, white } from 'style/constants';

const Container = styled.button`
  display: block;
  position: relative;
  margin: ${elemSpacingSm} 0;
  min-width: 100px;
  height: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${white};
  position: relative;
`;

const Logo = styled.img.attrs({
  src: props => props.img
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 70%;
  max-width: 70%;
`;

export default class Retailer extends React.Component {
  render() {
    console.log(this.props.logo);
    return (
      <Container>
        <Logo img={this.props.logo} />
      </Container>
    );
  }
}
