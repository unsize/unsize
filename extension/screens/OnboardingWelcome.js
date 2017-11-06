import React from 'react';
import { goTo } from 'route-lite';
import styled from 'styled-components';
import { Logo, H1, P, Button } from 'style';
import OnboardingName from './OnboardingName';

const WelcomeContainer = styled.div`
  button {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default class OnboardingWelcome extends React.Component {
  handleUnsizeClick() {
    goTo(OnboardingName);
  }

  render() {
    return (
      <WelcomeContainer>
        <H1>Welcome to unsize!</H1>
        <Logo src="icon.png" />
        <P>Join the revolution and figure out YOUR size</P>
        <Button onClick={this.handleUnsizeClick}>Start</Button>
      </WelcomeContainer>
    );
  }
}
