import React from 'react';
import Logo from '../../style/Logo';
import H1 from '../../style/H1';
import P from '../../style/P';
import Button from '../../style/Button';

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
