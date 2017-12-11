import React from 'react';
import styled from 'styled-components';
import { BackProfileHeader } from '../components/index';
import { H1, H6, Link } from 'style';
import { goTo } from 'route-lite';
import FinishRetailers from './onboarding/FinishRetailers';
import { Measurements } from '../model/Measurements';
import Method from './onboarding/Method';
import EditProfile from './EditProfile';

const Background = styled.img`
  position: absolute;
  bottom: -25px;
  left: 0;
  width: 100%;
  z-index: -1;
`;

const SettingsWrapper = styled.div`
  position: relative;

  h1 {
    margin-top: 0;
  }

  a {
    display: block;
    margin-bottom: 20px;
    margin: 20px auto;
    width: fit-content;
  }
`;

export default class Settings extends React.Component {
  visitRetailers = () => {
    goTo(FinishRetailers, { ...this.props, returningUser: true });
  };

  editProfile = () => {
    goTo(EditProfile, { ...this.props });
  };

  updateFit = () => {
    chrome.storage.sync.get('measurements', items => {
      let measurements = new Measurements();
      if (items['measurements']) {
        measurements = measurements.merge(items['measurements']);
      }
      goTo(Method, { ...this.props, measurements });
    });
  };

  render() {
    return (
      <SettingsWrapper>
        <BackProfileHeader {...this.props} includeBack={false} />
        <H1 align="center">Welcome back!</H1>
        <H6 align="center">What do you need help with?</H6>
        <Link href="#" onClick={this.visitRetailers}>
          Visit partnered retailers
        </Link>
        <Link href="#" onClick={this.editProfile}>
          Edit your profile
        </Link>
        <Link href="#" onClick={this.updateFit}>
          Update fit
        </Link>
        <Background src="/static/images/welcome_back.png" />
      </SettingsWrapper>
    );
  }
}
