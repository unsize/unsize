import React from 'react';
import styled from 'styled-components';
import { Button, Form, H1, Logo, NumberInput, ProfileArea } from 'style';
import ScreenContainer from '../components/ScreenContainer';

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
