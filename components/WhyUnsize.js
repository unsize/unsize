import React from 'react';
import {
  H1,
  H2 as _H2,
  H4 as _H4,
  H5 as _H5,
  H6,
  P,
  Button,
  Image
} from 'style';
import styled from 'styled-components';
import RowWrapper from './RowWrapper';
import Typist from 'react-typist';

const Quote = _H2.extend`
  background-image: url("/static/images/quote_background.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 50px 0;
  margin: 0;

  @media (max-width: 768px) {
    margin: 0 30px;
    padding: 30px 0;
  }

  @media (max-width: 480px) {
    margin: 20px 0;
    background-size: contain;
  }
`;

const H5 = _H5.extend`
  margin: 30px 60px 0 0;

  @media (max-width: 768px) {
    margin: 30px 10px;
  }
`;

const H4 = _H4.extend`
  margin-bottom: 0;
`;

const ContentWrapper = styled.div`
  @media (min-width: 769px) {
    margin: 30px 100px;
  }
`;

export default class WhyUnsize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caretVisible: true
    };
    this.interval = setInterval(() => {
      this.setState(old => {
        return { caretVisible: !old.caretVisible };
      });
    }, 750);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getCaret = () => (this.state.caretVisible ? '|' : '&nbsp;');

  render() {
    return (
      <RowWrapper>
        <H1 align="center">Why Unsize?</H1>
        <H4 align="center">You said:</H4>

        <Quote style={{ minHeight: '60px' }} align="center">
          <Typist>
            My thighs aren't made for jeans
            <Typist.Backspace count={31} delay={1000} />
            These are all smalls 🙄
            <Typist.Backspace count={31} delay={1000} />
            Online shopping is a pain
            <Typist.Backspace count={31} delay={1000} />
            I never fit right 😔
            <Typist.Backspace count={31} delay={1000} />
            This is why I don't wear dresses 👗🙅‍♀️
          </Typist>
        </Quote>

        <H5 align="center">
          You talked and we listened. After a bit of research we came up with
          some ways remove the frustration and difficulty from online shopping.
        </H5>
      </RowWrapper>
    );
  }
}
