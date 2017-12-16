import React from 'react';
import { goTo } from 'route-lite';
import styled from 'styled-components';
import { Button, H1, Image, Link, P } from 'style';
import { elemSpacingXs, elemSpacingSm, elemSpacingMd } from 'style/constants';
import ManualEntry from './ManualEntry';
import SyncComplete from './SyncComplete';
import { BackProfileHeader, ScreenContainer } from '../../components';

const MethodContainer = ScreenContainer.extend`
  img {
    margin: ${elemSpacingMd} 0 ${elemSpacingSm};
  }
  a {
    margin-bottom: ${elemSpacingSm};
  }

  button {
    display: block;
  }
`;

export default class Method extends React.Component {
  handleManualEntry = () => {
    goTo(ManualEntry, this.props);
  };

  handleSyncMeasurements = () => {
    goTo(SyncComplete, this.props);
  };

  render() {
    const headerText = this.props.measurements
      ? 'Update your fit'
      : 'Time for the fun part!';
    return (
      <MethodContainer>
        <BackProfileHeader {...this.props} includeBack />
        <H1 align="center">{headerText}</H1>
        <P>Sync your measurements with Tailor to begin</P>
        <Image
          src="/static/images/illustrations/sync_line.png"
          height="125px"
        />
        <Button primary onClick={this.handleSyncMeasurements}>
          Sync with Tailor
        </Button>
        <P small>Ahead of the game?</P>
        <Link small onClick={this.handleManualEntry}>
          Enter your measurements here
        </Link>
      </MethodContainer>
    );
  }
}
