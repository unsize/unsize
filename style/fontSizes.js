import { injectGlobal } from 'styled-components';

injectGlobal`

@media (min-width: 1440px) {
  h1 {
    font-size: 64px;
    line-height: 64px;
    margin: 20px 0px;
  }
  h2 {
    font-size: 48px;
    line-height: 48px;
    margin: 15px 0px;
  }
  h3 {
    font-size: 36px;
    line-weight: 36px;
  }
  h4 {
    font-size: 24px;
    line-weight: 24px;
  }
  h5 {
    font-size: 20px;
  }
  h6 {
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
}

@media (min-width: 1024px) and (max-width: 1439px) {
  h1 {
    font-size: 56px;
    line-height: 56px;
    margin: 20px 0px;
  }
  h2 {
    font-size: 42px;
    line-height: 42px;
    margin: 15px 0px;
  }
  h3 {
    font-size: 36px;
    line-weight: 36px;
  }
  h4 {
    font-size: 24px;
    line-weight: 24px;
  }
  h5 {
    font-size: 20px;
  }
  h6 {
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  h1 {
    font-size: 48px;
    line-height: 48px;
    margin: 20px 0px;
  }
  h2 {
    font-size: 36px;
    line-height: 36px;
    margin: 15px 0px;
  }
  h3 {
    font-size: 28px;
    line-weight: 28px;
  }
  h4 {
    font-size: 18px;
    line-weight: 18px;
  }
  h5 {
    font-size: 20px;
  }
  h6 {
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  h1 {
    font-size: 32px;
    line-height: 32px;
    margin: 20px 0px;
  }
  h2 {
    font-size: 28px;
    line-height: 28px;
    margin: 15px 0px;
  }
  h3 {
    font-size: 24px;
    line-weight: 24px;
  }
  h4 {
    font-size: 18px;
    line-weight: 18px;
  }
  h5 {
    font-size: 16px;
  }
  h6 {
    font-size: 16px;
  }
  p {
    font-size: 16px;
  }
}
`;
