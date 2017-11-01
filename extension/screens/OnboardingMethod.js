import React from 'react';
import styled from 'styled-components';
import { Button, H1, Link, P } from 'style';
import { goTo } from 'route-lite';
import OnboardingManualEntry from './OnboardingManualEntry';
import OnboardingSyncComplete from './OnboardingSyncComplete';
import { BackProfileHeader, WindowCorners } from '../components';

export default class OnboardingWelcome extends React.Component {
  handleManualEntry() {
    goTo(OnboardingManualEntry, this.props);
  }

  handleSyncMeasurements() {
    goTo(OnboardingSyncComplete, this.props);
  }

  render() {
    return (
      <WindowCorners>
        <BackProfileHeader {...this.props} includeBack />
        <H1>You're almost there!</H1>
        <P>Sync your measurements with Tailor to begin</P>
        <Button onClick={this.handleSyncMeasurements.bind(this)}>Sync with Tailor</Button>
        <P small>Already know your measurements?</P>
        <Link small onClick={this.handleManualEntry.bind(this)}>Enter them here</Link>
      </WindowCorners>
    );
  }
}
