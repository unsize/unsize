import React from 'react';
import Logo from '../../style/Logo';
import H1 from '../../style/H1';
import P from '../../style/P';
import PrimaryButton from '../../style/PrimaryButton';

export default class OnboardingWelcome extends React.Component {

    render() {
      return (
      <div>
        <Logo src="icon.png"/>
        <H1>Shuya,</H1>
        <P>You're almost there!</P>
        <P>Sync or enter your measurements to start shopping</P>
        <PrimaryButton>Sync with tailor</PrimaryButton>
        <PrimaryButton>Enter measurements</PrimaryButton>
      </div>
      );
    }
  }