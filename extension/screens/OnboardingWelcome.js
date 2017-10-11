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
        <H1>Hi, welcome to unsize!</H1>
        <P>Ready to unbox yourself and find your perfect fit?</P>
        <Button primary onClick={this.handleUnsizeClick}>
          unsize me
        </Button>
        <P>Join the revolution and start shopping personally!</P>
      </div>
    );
  }
}
