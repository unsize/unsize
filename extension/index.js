import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'route-lite';
import Home from './components/Home';
import Window from '../style/Window';
import OnboardingWelcome from './screens/OnboardingWelcome';

ReactDOM.render(
  <Wrapper>
    <Router>
      <OnboardingWelcome/>
    </Router>
  </Wrapper>,
  document.querySelector('#root')
);

