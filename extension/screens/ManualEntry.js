import React from 'react';
import { Button, H1, Logo, NumberInput, ProfileArea, TwoColumnForm } from 'style';

export default class ManualEntry extends React.Component {
  render() {
    const measurements = ['waist', 'neck', 'hip', 'chest', 'inseam', 'sleeve'];
    return (
      <div>
        <ProfileArea {...this.props} />
        <Logo />
        <H1>{this.props.name}'s Measurements</H1>
        <TwoColumnForm>
          {measurements.map(function(placeholder, i) {
            return <NumberInput placeholder={placeholder} key={i} />;
          })}
          <Button>Unsize Me!</Button>
        </TwoColumnForm>
      </div>
    );
  }
}
