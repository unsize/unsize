import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'route-lite';
import Window from './components/Window';
import Welcome from './screens/onboarding/Welcome';
import 'style/fontFaces';

ReactDOM.render(
  <Window>
    <Router>
      <Welcome />
    </Router>
  </Window>,
  document.querySelector('#root')
);
