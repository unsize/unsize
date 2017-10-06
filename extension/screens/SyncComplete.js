import React from 'react';
import { Button, Form, H1, Logo, ProfileArea } from 'style';

export default class SyncComplete extends React.Component {
  render() {
    return (
      <div>
        <ProfileArea {...this.props} />
        <Logo />
        <H1>Sync Complete!</H1>
        <Form>
          <Button>Unsize Me!</Button>
        </Form>
      </div>
    );
  }
}
