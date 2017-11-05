import React from 'react';
import { goTo } from 'route-lite';
import { Button, Form, Input, Logo, H1, P } from 'style';
import { elemSpacingSm, elemSpacingMd } from 'style/constants';
import OnboardingMethod from './OnboardingMethod';
import { ScreenContainer } from '../components';

const NameContainer = ScreenContainer.extend`
  #logo {
    margin-top: ${elemSpacingMd};
  }
  form {
    margin-top: ${elemSpacingSm};
  }
`;

export default class OnboardingName extends React.Component {
  handleNext() {
    let name = this.name.state.value.trim();
    if (name !== '') {
      goTo(OnboardingMethod, {
        name: name,
        sprinkle: Math.floor(Math.random() * 4)
      });
    }
  }

  render() {
    return (
      <NameContainer>
        <Logo id="logo" />
        <H1>Let's get started!</H1>
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
