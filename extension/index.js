import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'route-lite';
import Home from './components/Home';
import 'style/fontFaces';

ReactDOM.render(
  <Router>
    <Home>Hello, Unsize!</Home>
  </Router>,
  document.querySelector('#root')
);
