import React from 'react';
import { goTo } from 'route-lite';
import { Button, Form, Input, Logo, H2, P } from 'style';
import OnboardingMethod from './OnboardingMethod';
import isFormFilled from '../formCheck.js';

export default class OnboardingWelcome extends React.Component {
  handleNext() {
    if (isFormFilled()) {
      goTo(OnboardingMethod, {name: document.getElementById("name").value});
    }
  }

  render() {
    return (
      <div>
        <Logo src="icon.png" />
        <H2>We want to help you find YOUR fit</H2>
        <P>But first, can we get your name?</P>
        <Form>
          <Input labelName="name" />
          <Button onClick={this.handleNext}>Next</Button>
        </Form>
      </div>
    );
  }
}
