import React from 'react';
import { Button, H1, Link, P, TwoColumnLayout } from 'style';
import { BackProfileHeader } from '../components';

export default class OnboardingEnd extends React.Component {
  render() {
    return (
      <div>
        <BackProfileHeader {...this.props} />
        <H1>Woo! You're all set!</H1>
        <P>Start shopping with our partnered brands</P>
        <TwoColumnLayout>
          <Button>Partner 1</Button>
          <Button>Partner 2</Button>
          <Button>Partner 3</Button>
          <Button>Partner 4</Button>
        </TwoColumnLayout>
        <Link small>Meet Tailor</Link>
      </div>
    );
  }
}
