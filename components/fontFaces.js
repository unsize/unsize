import { injectGlobal } from 'styled-components';

injectGlobal`
@font-face {
  font-family: 'Halis';
  src: url('/static/fonts/HalisR-Medium.otf');
  font-weight: normal;
}

@font-face {
  font-family: 'Work Sans';
  src: url('/static/fonts/WorkSans-Regular.ttf');
  font-weight: normal;
}

@font-face {
  font-family: 'Work Sans';
  src: url('/static/fonts/WorkSans-SemiBold.ttf');
  font-weight: bold;
}
`;
