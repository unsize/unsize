import React from 'react';
import { Button, H1, Link, Logo, P } from 'style';
import { goTo } from 'route-lite';
import ManualEntry from './ManualEntry';
import SyncComplete from './SyncComplete';

export default class OnboardingWelcome extends React.Component {
  handleManualEntry() {
    goTo(ManualEntry);
  }

  handleSyncMeasurements() {
    goTo(SyncComplete);
  }

  render() {
    return (
      <div>
        <Logo src="icon.png" />
        <H1>Shuya,</H1>
        <P>You're almost there!</P>
        <P>Sync your measurements with Tailor to begin</P>
        <Button onClick={this.handleSyncMeasurements}>Sync with Tailor</Button>
        <Link onClick={this.handleManualEntry}>Enter measurements</Link>
      </div>
    );
  }
}
