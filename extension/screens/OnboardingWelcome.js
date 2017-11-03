import React from 'react';
import { goTo } from 'route-lite';
import styled from 'styled-components';
import { Logo, H1, P, Button } from 'style';
import { elemSpacingXs, elemSpacingSm, elemSpacingMd } from 'style/constants';
import OnboardingName from './OnboardingName';

const WelcomeContainer = styled.div`
  margin-left: ${elemSpacingMd};
  margin-bottom: ${elemSpacingMd};
  text-align: left;
  #logo {
    width: 150px;
    height: 150px;
    margin: 0 0 0 auto;
  }
  h1 {
    margin-bottom: ${elemSpacingXs};
  }
  p {
    margin: 0;
  }
  button {
    margin: 0;
  }
`;

export default class OnboardingWelcome extends React.Component {
  handleUnsizeClick() {
    goTo(OnboardingName);
  }

  render() {
    return (
      <WelcomeContainer>
        <Logo id="logo" />
        <H1>Welcome to Unsize!</H1>
        <P>Join the revolution and find YOUR size</P>
        <Button primary onClick={this.handleUnsizeClick}>Let's go!</Button>
      </WelcomeContainer>
    );
  }
}
