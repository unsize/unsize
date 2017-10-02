import React from 'react';
import styled from 'styled-components';
import { ProfilePic } from 'style';
import { workSansFont } from 'style/constants';

const Flex = styled.div`
  display: flex;
  align-items: center;
  font-family: ${workSansFont};
  font-size: 1rem;
  margin-left: 0.75rem;
`;

export default class ProfileArea extends React.Component {
  render() {
    return (
        <Flex>
          <ProfilePic img={this.props.img} />
          <p>{this.props.name}</p>
        </Flex>
    );
  }
}
