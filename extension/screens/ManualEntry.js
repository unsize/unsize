import React from 'react';
import styled from 'styled-components';
import { Button, H1, NumberInput } from 'style';
import Logo from '../components/Logo';
import ProfileArea from '../components/ProfileArea';
import ScreenContainer from '../components/ScreenContainer';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.5rem;

  input[type="number"] {
    margin-bottom: 1rem;
    width: 28%;
    &:nth-child(2n + 1) {
      margin-right: 1.25rem;
    }
    &:nth-child(2n + 2) {
      margin-left: 1.25rem;
    }
  }

  button {
    margin-top: 0.25rem;
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
        <Form>
          {measurements.map(function(placeholder, i) {
            return <NumberInput placeholder={placeholder} key={i} />;
          })}
          <Button>Unsize Me!</Button>
        </Form>
      </ScreenContainer>
    );
  }
}
