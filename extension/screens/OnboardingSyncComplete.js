import React from 'react';
import { goTo } from 'route-lite';
import { Button, Form, H1, P, ProfileArea } from 'style';
import OnboardingEnd from './OnboardingEnd';
import { BackProfileHeader, WindowCorners } from '../components';

export default class OnboardingSyncComplete extends React.Component {
  handleNext() {
    goTo(OnboardingEnd, this.props);
  }

  render() {
    return (
      <WindowCorners>
        <BackProfileHeader {...this.props} />
        <H1>Sync Complete!</H1>
        <P>Press the button below to finish up</P>
        <Form>
          <Button onClick={this.handleNext.bind(this)}>Unsize me!</Button>
        </Form>
      </WindowCorners>
    );
  }
}
