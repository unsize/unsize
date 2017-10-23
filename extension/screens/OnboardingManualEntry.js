import React from 'react';
import { goTo } from 'route-lite';
import { Button, H1, Input, Link, Logo, P, ProfileArea, Form } from 'style';
import OnboardingEnd from './OnboardingEnd';
import isFormFilled from '../formCheck.js';

export default class OnboardingManualEntry extends React.Component {
  handleNext() {
    if (isFormFilled()) {
      goTo(OnboardingEnd, this.props);
    }
  }

  render() {
    const measurements = ['neck', 'chest', 'sleeve', 'waist', 'hip', 'inseam'];
    return (
      <div>
        <ProfileArea {...this.props} />
        <Logo />
        <H1>{this.props.name}'s Measurements</H1>
        <P>Enter your measurements below to unsize yourself!</P>
        <P>Choose your units: in cm</P>
        <Form>
          {measurements.map(function(name, i) {
            return <Input labelName={name} key={i} type="number" />
          })}
          <Button onClick={this.handleNext.bind(this)}>Unsize Me!</Button>
        </Form>
        <P>Having trouble measuring? Unsure?</P>
        <Link href="http://unsize.me">Meet Tailor</Link>
      </div>
    );
  }
}
