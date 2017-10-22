import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'route-lite';
import { Window } from 'style';
import OnboardingWelcome from './screens/OnboardingWelcome';
import OnboardingManualEntry from './screens/OnboardingManualEntry';
import 'style/fontFaces';

ReactDOM.render(
  <Window>
    <Router>
      <OnboardingWelcome />
    </Router>
  </Window>,
  document.querySelector('#root')
);
