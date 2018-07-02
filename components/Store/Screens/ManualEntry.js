import React from 'react';
import styled from 'styled-components';
import { Button, Form, H1, Input, Link, P, RadioButton } from 'style';
import {
  elemSpacingXs,
  elemSpacingSm,
  elemSpacingMd,
  fontSizeSmall
} from 'style/constants';
import { Unit } from '../model/Unit';
import { Measurements } from '../model/Measurements';

const InlineGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${elemSpacingXs};
  p {
    margin-right: ${elemSpacingSm} !important;
    margin-bottom: 0px;
    font-size: ${fontSizeSmall};
  }
  label {
    font-size: ${fontSizeSmall};
  }
`;

const ManualEntryContainer = styled.div`
  text-align: center;
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
      neck: null,
      chest: null,
      sleeve: null
    };
  }

  static defaultProps = {
    measurements: new Measurements()
  };

  setMeasurements(e) {
    e.preventDefault();
    const { inputs } = this.state;
    this.props.setMeasurements(this.state);
    this.props.togglePopup();
  }

  updateValue(obj) {
    this.setState({ [obj.name]: obj.value });
  }

  render() {
    const measurements = new Measurements().keySeq().toJS();
    measurements.pop();
    var parent = this;
    return (
      <ManualEntryContainer>
        <H1 align="center">Enter your measurements</H1>
        <Form>
          <InlineGroup>
            <P>Choose your units:</P>
            <RadioButton groupName="units" labelName={Unit.IN} checked />
            <RadioButton groupName="units" labelName={Unit.CM} />
          </InlineGroup>
          {measurements.map((name, i) => (
            <Input
              labelName={name}
              key={i}
              type="number"
              focused={i == 0}
              updateValue={this.updateValue.bind(this)}
              defaultValue={this.props.measurements.get(name)}
            />
          ))}
          <Button primary onClick={this.setMeasurements.bind(this)}>
            {this.props.measurements ? 'Update Measurements' : 'Unsize Me'}
          </Button>
        </Form>
        <P small>Having trouble measuring?</P>
        <Link small onClick={() => this.props.setScreen(3)}>
          Meet Tailor!
        </Link>
      </ManualEntryContainer>
    );
  }
}
