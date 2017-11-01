import React from 'react';
import styled from 'styled-components';
import { elemSpacingXs, fontSizeNormal, halisFont, smoke } from './constants';
import Flex from './Flex';
import P from './P';

const ProfileContainer = Flex.extend`
  p {
    font-family: ${halisFont};
    color: ${smoke};
  }
`;

const ProfilePic = styled.div`
  height: 30px;
  width: 30px;
  /*
    TODO: add a prop that randomly selects a sprinkle, selects the profile pic based on this
   */
  background-image: url('/static/images/profile_pics/confetti.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin-left: ${elemSpacingXs};
`;

export default class ProfileArea extends React.Component {
  render() {
    return (
        <ProfileContainer>
          <P>{this.props.name}</P>
          <ProfilePic />
        </ProfileContainer>
    );
  }
}
