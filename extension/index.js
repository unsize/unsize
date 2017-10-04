import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'route-lite';
import Home from './components/Home';
import Window from '../style/Window';

ReactDOM.render(
  <Wrapper>
    <Router>
      <Home>Hello, Unsize!</Home>
    </Router>
  </Wrapper>,
  document.querySelector('#root')
);

