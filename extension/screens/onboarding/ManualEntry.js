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
import { BackProfileHeader, ScreenContainer } from '../../components';
import { Unit } from '../../model/Unit';
import { Measurements } from '../../model/Measurements';

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
    var found = this.state.inputs.find(input => {
      return input.state.required && input.state.value.trim() === '';
    });
    if (found == undefined) {
      chrome.storage.sync.set({ hasOnboarded: true });
      let result = new Measurements();
      this.state.inputs.forEach(input => {
        result = result.set(input.props.labelName, input.state.value.trim());
      });
      chrome.storage.sync.set({ measurements: result.toJS() });
      goTo(FinishRetailers, this.props);
    }
  }

  render() {
    const measurements = new Measurements().keySeq().toJS();
    measurements.pop();
    var parent = this;
    return (
      <ManualEntryContainer>
        <BackProfileHeader {...this.props} includeBack />
        <H1>Enter your measurements</H1>
        <Form>
          <InlineGroup>
            <P>Choose your units:</P>
            <RadioButton groupName="units" labelName={Unit.IN} checked />
            <RadioButton groupName="units" labelName={Unit.CM} />
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
