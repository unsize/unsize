import React from 'react';
import styled from 'styled-components';
import { goTo } from 'route-lite';
import { Button, Form, H1, Input, Link, P, RadioButton } from 'style';
import {
  elemSpacingXs,
  elemSpacingSm,
  elemSpacingMd,
  fontSizeSmall
} from 'style/constants';
import FinishRetailers from './FinishRetailers';
import {
  BackProfileHeader,
  ScreenContainer,
  WindowCorners
} from '../../components';

const InlineGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${elemSpacingXs};
  p {
    margin-right: ${elemSpacingSm} !important;
    font-size: ${fontSizeSmall};
  }
  label {
    font-size: ${fontSizeSmall};
  }
`;

const ManualEntryContainer = ScreenContainer.extend`
  form {
    margin-top: ${elemSpacingSm};
  }
  button {
    margin-top: calc(${elemSpacingSm} + ${elemSpacingXs});
  }
`;

export default class ManualEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: []
    };
  }

  handleNext() {
    for (var i in this.state.inputs) {
      var input = this.state.inputs[i];
      if (input.state.required && input.state.value.trim() === '') {
        return;
      }
    }
    goTo(FinishRetailers, this.props);
  }

  render() {
    const measurements = ['neck', 'chest', 'sleeve', 'waist', 'hip', 'inseam'];
    var parent = this;
    return (
      <ManualEntryContainer>
        <BackProfileHeader {...this.props} includeBack />
        <H1>Enter your measurements</H1>
        <Form>
          <InlineGroup>
            <P>Choose your units:</P>
            <RadioButton groupName="units" labelName="in" checked />
            <RadioButton groupName="units" labelName="cm" />
          </InlineGroup>
          {measurements.map(function(name, i) {
            return (
              <Input
                ref={el => parent.state.inputs.push(el)}
                labelName={name}
                key={i}
                type="number"
                focused={i == 0}
              />
            );
          })}
          <Button primary onClick={this.handleNext.bind(this)}>
            Unsize Me
          </Button>
        </Form>
        <P small>Having trouble measuring?</P>
        <Link small>Meet Tailor!</Link>
      </ManualEntryContainer>
    );
  }
}
