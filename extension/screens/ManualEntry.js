import React from 'react';
import ProfileArea from '../components/ProfileArea';
import { Button, H1, TextInput } from 'style';
import styled from 'styled-components';

const ManualEntryContainer = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const Logo = styled.img.attrs({
  src: '../icon.png'
})`
  height: 5rem;
  margin: -1.5rem auto 0;
  display: block;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  input[type="number"] {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

export default class ManualEntry extends React.Component {
  render() {
    const measurements = ['waist', 'neck', 'hip', 'chest', 'inseam', 'sleeve'];

    console.log(measurements);
    return (
      <ManualEntryContainer>
        <ProfileArea {...this.props} />
        <Logo />
        <H1>{this.props.name.toUpperCase()}'s Measurements</H1>
        <Form>
          {measurements.map(function(placeholder, i) {
            return <TextInput placeholder={placeholder} key={i} />;
          })}
          <Button>Unsize Me!</Button>
        </Form>
      </ManualEntryContainer>
    );
  }
}
