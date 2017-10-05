import React from 'react';
import styled from 'styled-components';
import { pSize } from './constants';
import Image from './Image';
import P from './P';

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${pSize};
`;

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
