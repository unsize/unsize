import React from 'react';
import styled from 'styled-components';
import { elemSpacingSm, fontSizeNormal, halisFont, smoke } from './constants';
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
  background-image: ${props => "url('/static/images/profile_pics/" + props.sprinkle + ".png')"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin-left: ${elemSpacingSm};
`;

export default class ProfileArea extends React.Component {
  render() {
    const sprinkles = ['boost', 'confetti', 'maca', 'scribble'];
    return (
        <ProfileContainer>
          <P>{this.props.name}</P>
          <ProfilePic sprinkle={sprinkles[this.props.sprinkle]} />
        </ProfileContainer>
    );
  }
}
