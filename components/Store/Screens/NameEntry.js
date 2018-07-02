import React from 'react';
import { goTo } from 'route-lite';
import styled from 'styled-components';
import { Button, Form, Input, Logo, H1, P } from 'style';
import { elemSpacingSm, elemSpacingMd } from 'style/constants';

const NameContainer = styled.div`
  #logo {
    margin-top: ${elemSpacingMd};
  }
  form {
    margin-top: ${elemSpacingSm};
  }
`;

export default class NameEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      neck: null,
      chest: null,
      sleeve: null
    };
  }

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
          <Input type="text" labelName="name" focused />
          <Button type="button" primary onClick={() => this.props.setScreen(3)}>
            Next
          </Button>
        </Form>
      </NameContainer>
    );
  }
}
