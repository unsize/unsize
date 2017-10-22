import React from 'react';
import { Button, H1, Link, Logo, P } from 'style';
import { goTo } from 'route-lite';
import OnboardingManualEntry from './OnboardingManualEntry';
import OnboardingSyncComplete from './OnboardingSyncComplete';

export default class OnboardingWelcome extends React.Component {
  handleManualEntry() {
    goTo(OnboardingManualEntry, this.props);
  }

  handleSyncMeasurements() {
    goTo(OnboardingSyncComplete, this.props);
  }

  render() {
    return (
      <div>
        <Logo src="icon.png" />
        <H1>{this.props.name},</H1>
        <P>You're almost there!</P>
        <P>Sync your measurements with Tailor to begin</P>
        <Button onClick={this.handleSyncMeasurements.bind(this)}>Sync with Tailor</Button>
        <Link onClick={this.handleManualEntry.bind(this)}>Enter measurements</Link>
      </div>
    );
  }
}
