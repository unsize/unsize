import React from 'react';
import { goTo } from 'route-lite';
import { Button, Form, H1, Logo, ProfileArea } from 'style';
import OnboardingEnd from './OnboardingEnd';

export default class OnboardingSyncComplete extends React.Component {
  handleNext() {
    goTo(OnboardingEnd, this.props);
  }

  render() {
    return (
      <div>
        <ProfileArea {...this.props} />
        <Logo />
        <H1>Sync Complete!</H1>
        <Form>
          <Button onClick={this.handleNext.bind(this)}>Unsize Me!</Button>
        </Form>
      </div>
    );
  }
}
