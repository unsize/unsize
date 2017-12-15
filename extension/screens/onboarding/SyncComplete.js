import React from 'react';
import { goTo } from 'route-lite';
import styled from 'styled-components';
import { Button, Form, H1, Image, P } from 'style';
import { elemSpacingXs, elemSpacingSm } from 'style/constants';
import FinishRetailers from './FinishRetailers';
import { BackProfileHeader, ScreenContainer } from '../../components';

const SyncCompleteContainer = ScreenContainer.extend`
  img {
    margin: ${elemSpacingSm} 0 ${elemSpacingXs};
    transform: translateX(${elemSpacingXs});
  }
`;

export default class SyncComplete extends React.Component {
  handleNext() {
    chrome.storage.sync.set({ hasOnboarded: true });
    goTo(FinishRetailers, this.props);
  }

  render() {
    return (
      <SyncCompleteContainer>
        <BackProfileHeader {...this.props} />
        <H1 align="center">Sync complete!</H1>
        <Image
          src="/static/images/illustrations/sync_complete_line.png"
          height="125px"
        />
        <Form>
          <Button primary onClick={this.handleNext.bind(this)}>
            Unsize Me
          </Button>
        </Form>
      </SyncCompleteContainer>
    );
  }
}
