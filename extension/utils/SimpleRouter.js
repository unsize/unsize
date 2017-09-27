import React from 'react';
import { List, Record } from 'immutable';

const StackItem = Record({ component: null, props: {} });

let stack = new List();
let component;

function goTo(comp, props = {}) {
  stack = stack.push(new StackItem({ component: comp, props }));
  component && component.forceUpdate();
}

function goBack() {
  stack = stack.pop();
  component && component.forceUpdate();
}

export default class SimpleRouter extends React.Component {
  componentDidMount = () => {
    component = this;
  };
  render() {
    const { component: Component, props } = stack.last();
    return <Component {...props}>{this.props.children}</Component>;
  }
}

export { goTo, goBack };
