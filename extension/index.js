import React from 'react';
import ReactDOM from 'react-dom';
import fontFaces from 'style/fontFaces';
import SimpleRouter, { goTo } from './utils/SimpleRouter';
import Home from './components/Home';

goTo(Home, { children: 'Hello, Unsize' });
ReactDOM.render(<SimpleRouter />, document.querySelector('#root'));
