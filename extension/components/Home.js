import React from 'react';
import { H1 } from 'style';
import { goTo } from 'route-lite';
import Person from './Person';

export default class Home extends React.Component {
  goToPerson() {
    goTo(Person, { name: 'Jon' });
  }
  render() {
    return <H1 onClick={this.goToPerson}>Hello, Unsize</H1>;
  }
}
