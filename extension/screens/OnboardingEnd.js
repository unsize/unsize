import React from 'react';
import styled from 'styled-components';
import { Button, H1, Link, P, ProfileArea, TwoColumnLayout } from 'style';

export default class OnboardingEnd extends React.Component {
  render() {
    return (
      <div>
        <ProfileArea {...this.props} />
        <H1>Woo! You're all set, {this.props.name}!</H1>
        <P>Start shopping with our partnered brands</P>
        <TwoColumnLayout>
          <Button>Partner 1</Button>
          <Button>Partner 2</Button>
          <Button>Partner 3</Button>
          <Button>Partner 4</Button>
        </TwoColumnLayout>
        <Link>Meet Tailor</Link>
      </div>
    );
  }
}
