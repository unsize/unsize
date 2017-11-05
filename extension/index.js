import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'route-lite';
import { Window } from 'style';
import OnboardingWelcome from './screens/OnboardingWelcome';
import 'style/fontFaces';
import 'style/fontSizes';

ReactDOM.render(
  <Window>
    <Router>
      <OnboardingWelcome />
    </Router>
  </Window>,
  document.querySelector('#root')
);
