import React from 'react';
import styled from 'styled-components';
import { fontSizeNormal } from './constants';
import Flex from './Flex';
import Image from './Image';
import P from './P';

export default class ProfileArea extends React.Component {
  render() {
    return (
        <Flex>
          <Image img={this.props.profilePic} rounded={true} />
          <P>{this.props.name}</P>
        </Flex>
    );
  }
}
