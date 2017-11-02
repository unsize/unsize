import React from 'react';
import { goTo } from 'route-lite';
import styled from 'styled-components';
import { Button, Form, H1, Image, P } from 'style';
import { elemSpacingXs, elemSpacingMd } from 'style/constants';
import OnboardingEnd from './OnboardingEnd';
import { BackProfileHeader, ScreenContainer, WindowCorners } from '../components';

const SyncCompleteContainer = ScreenContainer.extend`
  img {
    margin: ${elemSpacingMd} 0 ${elemSpacingXs};
    transform: translateX(${elemSpacingXs});
  }
`;

export default class OnboardingSyncComplete extends React.Component {
  handleNext() {
    debugger;
    this.corners.hideCorners(function() {
      goTo(OnboardingEnd, this.props);
    }.bind(this));
  }

  render() {
    return (
      <SyncCompleteContainer>
        <WindowCorners ref={corners => this.corners = corners} />
        <BackProfileHeader {...this.props} />
        <H1>Sync Complete!</H1>
        <P>Press the button below to finish up</P>
        <Image src="/static/images/illustrations/sync_complete_line.png" height="125px" />
        <Form>
          <Button onClick={this.handleNext.bind(this)}>Unsize me!</Button>
        </Form>
      </SyncCompleteContainer>
    );
  }
}
