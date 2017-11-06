import React from 'react';
import { goTo } from 'route-lite';
import { Button, H1, Link, Logo, P } from 'style';
import styled from 'styled-components';
import OnboardingManualEntry from './OnboardingManualEntry';
import OnboardingSyncComplete from './OnboardingSyncComplete';

const MethodContainer = styled.div`
  button {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default class OnboardingMethod extends React.Component {
  handleManualEntry() {
    goTo(OnboardingManualEntry, this.props);
  }

  handleSyncMeasurements() {
    goTo(OnboardingSyncComplete, this.props);
  }

  render() {
    return (
      <MethodContainer>
        <Logo src="icon.png" />
        <H1>{this.props.name},</H1>
        <P>You're almost there!</P>
        <P>Sync your measurements with Tailor to begin</P>
        <Button onClick={this.handleSyncMeasurements.bind(this)}>Sync with Tailor</Button>
        <Link onClick={this.handleManualEntry.bind(this)}>Enter measurements</Link>
      </MethodContainer>
    );
  }
}
