import React from 'react';
import styled from 'styled-components';
import { H1, H6, Button, Input } from 'style';
import { BackProfileHeader } from '../components/index';
import { goTo } from 'route-lite';
import Settings from './Settings';
import SprinkleSelect from '../components/SprinkleSelect';

const ProfileWrapper = styled.div`
  h1 {
    margin-top: 0;
  }

  .input-group {
    margin: 0 auto;
    max-width: 250px;
  }
`;
export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sprinkle: props.sprinkle || 0
    };
  }

  saveUpdates = () => {
    const name = this.nameInput.state.value.trim();
    if (!name) {
      return;
    }
    chrome.storage.sync.set({
      name,
      sprinkle: this.state.sprinkle
    });
    goTo(Settings, {
      ...this.props,
      name,
      sprinkle: this.state.sprinkle
    });
  };

  handleSprinkleSelected = sprinkle => {
    this.setState(() => {
      return { sprinkle };
    });
  };

  render() {
    return (
      <ProfileWrapper>
        <BackProfileHeader {...this.props} includeBack={false} />
        <H1 align="center">Edit your profile</H1>
        <H6 align="center">Change your name and find your sprinkle</H6>
        <Input
          ref={el => (this.nameInput = el)}
          labelName="name"
          focused
          required
          defaultValue={this.props.name}
        />
        <SprinkleSelect
          onChange={this.handleSprinkleSelected}
          defaultValue={this.props.sprinkle}
        />
        <Button primary onClick={this.saveUpdates}>
          Save
        </Button>
      </ProfileWrapper>
    );
  }
}
