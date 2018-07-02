import React from 'react';
import { goTo } from 'route-lite';
import styled from 'styled-components';
import { Logo, H2, P, Button } from 'style';
import { elemSpacingXs, elemSpacingSm, elemSpacingMd } from 'style/constants';

const WelcomeContainer = styled.div`
  margin-left: calc(${elemSpacingXs} + ${elemSpacingMd});
  text-align: left;
  #logo {
    width: 190px;
    height: 190px;
    margin: 0 0 0 auto;
    transform: translate(-40px, 20px);
  }
  h2 {
    text-align: left;
    margin-top: 45px;
    margin-bottom: 0;
  }
  p {
    margin: 0;
  }
  button {
    margin: 0;
    margin-top: calc(${elemSpacingXs} + ${elemSpacingSm});
    margin-bottom: ${elemSpacingMd};
  }
`;

const CornerDecorations = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: -1;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
  }
  &::before {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: url('/static/images/welcome_header.png');
    background-position: center top;
    background-size: cover;
  }
  &::after {
    right: 0;
    bottom: 0;
    height: 100px;
    width: 250px;
    background-image: url('/static/images/welcome_blue.png');
    background-position: right bottom;
  }
  p {
    text-align: left;
  }
`;

export default class Welcome extends React.Component {
  render() {
    const finders = [
      'style',
      'confidence',
      'perfect look',
      'new favorite outfit'
    ];
    return (
      <WelcomeContainer>
        <CornerDecorations />
        <Logo id="logo" />
        <H2 align="center">Welcome to Unsize!</H2>
        <P>
          {`Let's find your ${
            finders[Math.floor(Math.random() * finders.length)]
          }`}
        </P>
        <Button primary onClick={() => this.props.setScreen(2)}>
          Let's Go
        </Button>
      </WelcomeContainer>
    );
  }
}
