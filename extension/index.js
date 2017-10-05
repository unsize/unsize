import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'route-lite';
import Window from '../style/Window';
import OnboardingWelcome from './screens/OnboardingWelcome';
import 'style/fontFaces';

ReactDOM.render(
  <Wrapper>
    <Router>
      <OnboardingWelcome/>
    </Router>
  </Wrapper>,
  document.querySelector('#root')
);

