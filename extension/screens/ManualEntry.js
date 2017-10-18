import React from 'react';
import { Button, H1, Input, Logo, P, ProfileArea, Form } from 'style';

export default class ManualEntry extends React.Component {
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
          {measurements.map(function(placeholder, i) {
            return <Input type="number" placeholder={placeholder} key={i} />;
          })}
          <Button>Unsize Me!</Button>
        </Form>
        <P>Having trouble measuring? Unsure?</P>
        <P>Meet Tailor</P>
      </div>
    );
  }
}
