import React from 'react';
import { goTo } from 'route-lite';
import { Button, Form, Input, Logo, H1, P } from 'style';
import OnboardingMethod from './OnboardingMethod';

export default class OnboardingName extends React.Component {
  handleNext() {
    if (this.name.state.value.trim() !== "") {
      goTo(OnboardingMethod, {name: this.name.state.value});
    }
  }

  render() {
    return (
      <div>
        <Logo src="icon.png" />
        <H1>Let's get started!</H1>
        <P>What's your name?</P>
        <Form>
          <Input ref={c => this.name = c} type="text" labelName="name" focused />
          <Button onClick={this.handleNext.bind(this)}>Next</Button>
        </Form>
      </div>
    );
  }
}
