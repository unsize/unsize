import React from 'react';
import { Logo } from 'style';
import { H1, P, Button } from 'style'

export default class OnboardingWelcome extends React.Component {

    render() {
      return (
      <div>
        <Logo src="icon.png"/>
        <H1>Shuya,</H1>
        <P>You're almost there!</P>
        <P>Sync or enter your measurements to start shopping</P>
        <Button>Sync with tailor</Button>
        <Button>Enter measurements</Button>
      </div>
      );
    }
  }
