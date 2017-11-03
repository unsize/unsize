import React from 'react';
import styled from 'styled-components';
import { goTo } from 'route-lite';
import { Button, Form, H1, Input, Link, P, RadioButton } from 'style';
import { elemSpacingXs, elemSpacingSm, elemSpacingMd } from 'style/constants';
import OnboardingEnd from './OnboardingEnd';
import { BackProfileHeader, ScreenContainer, WindowCorners } from '../components';

const InlineGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${elemSpacingXs};
  p {
    margin-right: ${elemSpacingSm} !important;
  }
`;

const ManualEntryContainer = ScreenContainer.extend`
  form {
    margin-top: ${elemSpacingMd};
  }
  button {
    margin-top: calc(${elemSpacingSm} + ${elemSpacingXs});
  }
`;

export default class OnboardingManualEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: []
    };
  }

  handleNext() {
    for (var i in this.state.inputs) {
      var input = this.state.inputs[i];
      if (input.state.required && input.state.value.trim() === "") {
        return;
      }
    }
    this.corners.hideCorners(function() {
      goTo(OnboardingEnd, this.props);
    }.bind(this));
  }

  render() {
    const measurements = ['neck', 'chest', 'sleeve', 'waist', 'hip', 'inseam'];
    var parent = this;
    return (
      <ManualEntryContainer>
        <WindowCorners ref={corners => this.corners = corners} />
        <BackProfileHeader {...this.props} includeBack />
        <H1>Enter your measurements</H1>
        <P>You can always change these later</P>
        <Form>
          <InlineGroup>
            <P>Choose your units:</P>
            <RadioButton groupName="units" labelName="in" checked />
            <RadioButton groupName="units" labelName="cm" />
          </InlineGroup>
          {measurements.map(function(name, i) {
            return <Input ref={el => parent.state.inputs.push(el)} labelName={name}
              key={i} type="number" focused={i == 0} />
          })}
          <Button primary onClick={this.handleNext.bind(this)}>Unsize me!</Button>
        </Form>
        <P small>Having trouble measuring?</P>
        <Link small>Meet Tailor</Link>
      </ManualEntryContainer>
    );
  }
}
