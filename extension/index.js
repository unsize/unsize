import React from 'react';
import ReactDOM from 'react-dom';
import SimpleRouter, { goTo } from './utils/SimpleRouter';
import Home from './components/Home';
import 'style/fontFaces';

goTo(Home, { children: 'Hello, Unsize' });
ReactDOM.render(<SimpleRouter />, document.querySelector('#root'));
