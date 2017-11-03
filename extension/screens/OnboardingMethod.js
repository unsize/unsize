import React from 'react';
import { goTo } from 'route-lite';
import styled from 'styled-components';
import { Button, H1, Image, Link, P } from 'style';
import { elemSpacingXs, elemSpacingSm, elemSpacingMd } from 'style/constants';
import OnboardingManualEntry from './OnboardingManualEntry';
import OnboardingSyncComplete from './OnboardingSyncComplete';
import { BackProfileHeader, ScreenContainer, WindowCorners } from '../components';

const MethodContainer = ScreenContainer.extend`
  img {
    margin: ${elemSpacingMd} 0 ${elemSpacingSm};
  }
  a {
    margin-bottom: ${elemSpacingXs};
  }
`;

export default class OnboardingMethod extends React.Component {
  handleManualEntry() {
    this.corners.hideCorners(function() {
      goTo(OnboardingManualEntry, this.props);
    }.bind(this));
  }

  handleSyncMeasurements() {
    this.corners.hideCorners(function() {
      goTo(OnboardingSyncComplete, this.props);
    }.bind(this));
  }

  render() {
    return (
      <MethodContainer>
        <WindowCorners ref={corners => this.corners = corners} />
        <BackProfileHeader {...this.props} includeBack />
        <H1>You're almost there!</H1>
        <P>Sync your measurements with Tailor to begin</P>
        <Image src="/static/images/illustrations/sync_line.png" height="125px" />
        <Button primary onClick={this.handleSyncMeasurements.bind(this)}>Sync with Tailor</Button>
        <P small>Already know your measurements?</P>
        <Link small onClick={this.handleManualEntry.bind(this)}>Enter them here</Link>
      </MethodContainer>
    );
  }
}
