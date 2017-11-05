import React from 'react';
import { goTo } from 'route-lite';
import styled from 'styled-components';
import { Button, Form, H1, Image, P } from 'style';
import { elemSpacingXs, elemSpacingSm } from 'style/constants';
import OnboardingEnd from './OnboardingEnd';
import {
  BackProfileHeader,
  ScreenContainer,
  WindowCorners
} from '../components';

const SyncCompleteContainer = ScreenContainer.extend`
  img {
    margin: ${elemSpacingSm} 0 ${elemSpacingXs};
    transform: translateX(${elemSpacingXs});
  }
`;

export default class OnboardingSyncComplete extends React.Component {
  handleNext() {
    goTo(OnboardingEnd, this.props);
  }

  render() {
    return (
      <SyncCompleteContainer>
        <BackProfileHeader {...this.props} />
        <H1>Sync complete!</H1>
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
