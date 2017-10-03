import React from 'react';
import ReactDOM from 'react-dom';
import SimpleRouter, { goTo } from './utils/SimpleRouter';
import Home from './components/Home';
import Window from '../style/Window';

goTo(Home, { children: 'Hello, Unsize' });
ReactDOM.render(<Window><SimpleRouter /></Window>, document.querySelector('#root'));
