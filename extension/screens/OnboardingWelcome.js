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
        <H1>Welcome to unsize!</H1>
        <Logo src="icon.png" />
        <P>Join the revolution and figure out YOUR size</P>
        <Button onClick={this.handleUnsizeClick}>NEXT</Button>
      </div>
    );
  }
}
