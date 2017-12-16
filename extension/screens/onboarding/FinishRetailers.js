import React from 'react';
import { Button, H1, Link, P, TwoColumnLayout } from 'style';
import {
  blue,
  elemSpacingXs,
  elemSpacingSm,
  elemSpacingMd,
  elemSpacingLg,
  white
} from 'style/constants';
import { BackProfileHeader, Retailer, ScreenContainer } from '../../components';
import { goTo } from 'route-lite';
import Settings from '../Settings';
import styled from 'styled-components';

const EndContainer = ScreenContainer.extend`
  #subheader {
    margin-bottom: ${elemSpacingMd};
  }
  button {
    margin-bottom: ${elemSpacingSm};
  }
  #partners {
    margin-bottom: calc(${elemSpacingSm} + ${elemSpacingXs});
    background: ${white};
    padding: 0 calc(${elemSpacingSm} + ${elemSpacingLg});
  }
`;

const DevResetOnboarding = styled.button`
  display: block;
  margin: 0 auto;
`;

export default class FinishRetailers extends React.Component {
  renderReset() {
    if (!('update_url' in chrome.runtime.getManifest())) {
      return (
        <DevResetOnboarding
          onClick={() => chrome.storage.sync.set({ hasOnboarded: false })}
        >
          RESET ONBOARDING
        </DevResetOnboarding>
      );
    }
    return null;
  }

  goToSettings = () => {
    goTo(Settings, this.props);
  };

  renderAction() {
    if (this.props.returningUser) {
      return (
        <Button primary onClick={this.goToSettings}>
          Back
        </Button>
      );
    }
    return (
      <Link href="http://unsize.me" small>
        Meet Tailor
      </Link>
    );
  }

  render() {
    const headerText = this.props.returningUser
      ? 'Time to shop!'
      : "Woo! You're all set!";
    const subtitleText = this.props.returningUser
      ? 'Visit these retailers to shop with Unsize'
      : 'Start shopping with our partnered brands';
    return (
      <EndContainer>
        <BackProfileHeader {...this.props} />
        <H1 align="center">{headerText}</H1>
        <P id="subheader">{subtitleText}</P>
        <TwoColumnLayout id="partners">
          <Retailer pink logo="/static/images/retailers/asos.png" />
          <Retailer green logo="/static/images/retailers/lyst.png" />
          <Retailer yellow logo="/static/images/retailers/shopstyle.png" />
        </TwoColumnLayout>
        {this.renderAction()}
        {this.renderReset()}
      </EndContainer>
    );
  }
}
