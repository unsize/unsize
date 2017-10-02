import React from 'react';
import ReactDOM from 'react-dom';
import SimpleRouter, { goTo } from './utils/SimpleRouter';
import Home from './components/Home';
import ManualEntry from './screens/ManualEntry';
import 'style/fontFaces';

//goTo(Home, { children: 'Hello, Unsize' });
goTo(ManualEntry, { name: 'Shuya', img: 'https://quikconsult.com/images/profile.png'});
ReactDOM.render(<SimpleRouter />, document.querySelector('#root'));
