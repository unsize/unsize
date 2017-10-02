import React from 'react';
import { H2 } from 'style';
import { goBack } from 'route-lite';

export default class Person extends React.Component {
  render() {
    return <H2 onClick={goBack}>Hello, {this.props.name}</H2>;
  }
}
