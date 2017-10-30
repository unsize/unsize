import React from 'react';
import styled from 'styled-components';
import { goTo } from 'route-lite';
import { Button, Form, H1, Input, Link, Logo, P, ProfileArea, RadioButton } from 'style';
import OnboardingEnd from './OnboardingEnd';

const InlineGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

export default class OnboardingManualEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'inputs': []
    };
  }

  handleNext() {
    for (var i in this.state.inputs) {
      var input = this.state.inputs[i];
      if (input.state.required && input.state.value.trim() === "") {
        return;
      }
    }
    goTo(OnboardingEnd, this.props);
  }

  render() {
    const measurements = ['neck', 'chest', 'sleeve', 'waist', 'hip', 'inseam'];
    var parent = this;
    return (
      <div>
        <ProfileArea {...this.props} />
        <Logo />
        <H1>{this.props.name}'s Measurements</H1>
        <P>Enter your measurements below to unsize yourself!</P>
        <P>Choose your units:</P>
        <Form>
          <InlineGroup>
            <RadioButton groupName="units" labelName="in" checked />
            <RadioButton groupName="units" labelName="cm" />
          </InlineGroup>
          {measurements.map(function(name, i) {
            return <Input ref={el => parent.state.inputs.push(el)} labelName={name}
              key={i} type="number" focused={i == 0} />
          })}
          <Button onClick={this.handleNext.bind(this)}>Unsize Me!</Button>
        </Form>
        <P>Having trouble measuring? Unsure?</P>
        <Link>Meet Tailor</Link>
      </div>
    );
  }
}
