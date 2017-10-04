import React from 'react';
import extend from 'styled-components';
import { Button, Form, H1, Logo, NumberInput, ProfileArea } from 'style';
import { elementSpacing, pSize } from 'style/constants'
import ScreenContainer from '../components/ScreenContainer';

const TwoColumnForm = Form.extend`
  input[type="number"] {
    margin-bottom: ${pSize};
    width: 27%;
    &:nth-child(2n + 1) {
      margin-right: ${elementSpacing};
    }
    &:nth-child(2n + 2) {
      margin-left: ${elementSpacing};
    }
  }
  button {
    margin-top: 4px;
  }
`;

export default class ManualEntry extends React.Component {
  render() {
    const measurements = ['waist', 'neck', 'hip', 'chest', 'inseam', 'sleeve'];
    return (
      <ScreenContainer>
        <ProfileArea {...this.props} />
        <Logo />
        <H1>{this.props.name/*.toUpperCase()*/}'s Measurements</H1>
        <TwoColumnForm>
          {measurements.map(function(placeholder, i) {
            return <NumberInput placeholder={placeholder} key={i} />;
          })}
          <Button>Unsize Me!</Button>
        </TwoColumnForm>
      </ScreenContainer>
    );
  }
}
