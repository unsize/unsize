import React from 'react';
import styled from 'styled-components';
import { Button, H1, NumberInput } from 'style';
import Logo from '../components/Logo';
import ProfileArea from '../components/ProfileArea';
import ScreenContainer from '../components/ScreenContainer';

const Form = styled.form`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
`;

export default class SyncComplete extends React.Component {
  render() {
    return (
      <ScreenContainer>
        <ProfileArea {...this.props} />
        <Logo />
        <H1>Sync Complete!</H1>
        <Form>
          <Button>Unsize Me!</Button>
        </Form>
      </ScreenContainer>
    );
  }
}
