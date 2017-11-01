import React from 'react';
import { goTo } from 'route-lite';
import { Logo, H1, P, Button } from 'style';
import OnboardingName from './OnboardingName';

export default class OnboardingWelcome extends React.Component {
  handleUnsizeClick() {
    goTo(OnboardingName);
  }

  render() {
    return (
      <div>
        <Logo src="icon.png" />
        <H1>Welcome to Unsize!</H1>
        <P>Join the revolution and find YOUR size</P>
        <Button onClick={this.handleUnsizeClick}>Let's go!</Button>
      </div>
    );
  }
}
