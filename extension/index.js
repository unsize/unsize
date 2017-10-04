import React from 'react';
import ReactDOM from 'react-dom';
import SimpleRouter, { goTo } from './utils/SimpleRouter';
import Home from './components/Home';
import ManualEntry from './screens/ManualEntry';
import SyncComplete from './screens/SyncComplete';
import 'style/fontFaces';

goTo(ManualEntry, { name: 'Shuya', profilePic: 'https://quikconsult.com/images/profile.png'});
ReactDOM.render(<SimpleRouter />, document.querySelector('#root'));
