import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'route-lite';
import { Window } from 'style';
import OnboardingWelcome from './screens/OnboardingWelcome';
import ManualEntry from './screens/ManualEntry';
import 'style/fontFaces';

ReactDOM.render(
  <Window>
    <Router>
      <OnboardingWelcome />
    </Router>
  </Window>,
  document.querySelector('#root')
);
