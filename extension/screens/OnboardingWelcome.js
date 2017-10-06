import React from 'react';
import { Logo, H1, P, Button } from 'style';

export default class OnboardingWelcome extends React.Component {

    render() {
      return (
      <div>
        <Logo src="icon.png"/>
        <H1>Hi, welcome to unsize!</H1>
        <P>Ready to unbox yourself and find your perfect fit?</P>
        <Button primary>unsize me</Button>
        <P>Join the revolution and start shopping personally!</P>
      </div>
      );
    }
  }
