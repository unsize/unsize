import React from 'react';
import { H1, H2 as _H2, H4, H5, H6, P, Button, Image } from 'style';
import styled from 'styled-components';
import { setInterval } from 'timers';

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

const WhyContainer = styled.section`
  margin: 100px auto;
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

  getCaret = () => (this.state.caretVisible ? '|' : '&nbsp;');

  render() {
    return (
      <WhyContainer id="why">
        <H1 align="center">Why Unsize?</H1>
        <ContentWrapper>
          <H4 align="center">You said:</H4>
          <Quote align="center">
            My thighs aren't made for jeans
            <code dangerouslySetInnerHTML={{ __html: this.getCaret() }} />
          </Quote>
          <H5>
            You talked, and we listened. After our extensive user research, we
            came up with a two part system to help remove the frustration and
            difficulty from online shopping.
          </H5>
        </ContentWrapper>
      </WhyContainer>
    );
  }
}
