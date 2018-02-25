import React from 'react';
import { goTo } from 'route-lite';
import { Button, Form, Input, Logo, H1, P } from 'style';
import { elemSpacingSm, elemSpacingMd } from 'style/constants';
import Method from './Method';
import { ScreenContainer } from '../../components';

const NameContainer = ScreenContainer.extend`
  #logo {
    margin-top: ${elemSpacingMd};
  }
  form {
    margin-top: ${elemSpacingSm};
  }
`;

export default class NameEntry extends React.Component {
  handleNext() {
    let name = this.name.state.value.trim();
    if (name !== '') {
      const sprinkle = parseInt(name, 36) % 4;
      chrome.storage.sync.set({
        name,
        sprinkle,
        sprinkleOverride: false
      });
      goTo(Method, {
        name,
        sprinkle
      });
    }
  }

  render() {
    return (
      <NameContainer>
        <Logo id="logo" />
        <H1 align="center">Let's get started!</H1>
        <P>What's your name?</P>
        <Form>
          <Input
            ref={name => (this.name = name)}
            type="text"
            labelName="name"
            focused
          />
          <Button primary onClick={this.handleNext.bind(this)}>
            Next
          </Button>
        </Form>
      </NameContainer>
    );
  }
}
