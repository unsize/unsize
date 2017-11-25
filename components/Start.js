import React from 'react';
import { H1, H3 as _H3, H4, H5 as _H5, Image, Button } from 'style';
import styled from 'styled-components';

const StepsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-top: 50px;

  @media (max-width: 839px) {
    text-align: center;
  }
`;

const Step = styled.div`
  min-width: 400px;
  max-width: 385px;
  margin-bottom: 50px;
  @media (min-width: 840px) {
    max-width: 45%;
  }

  img {
    max-height: 350px;
    max-width: 385px;
  }
`;

const H3 = _H3.extend`
  margin-bottom: 0;
`;

const H5 = _H5.extend`
  margin: 10px auto;
`;

const Wrapper = styled.div`
  margin: 100px auto 0;
  max-width: 900px;
`;

export default class Start extends React.Component {
  render() {
    return (
      <Wrapper>
        <H1 align="center">Get Started</H1>
        <StepsContainer>
          <Step>
            <Image width="100%" height={450} src="/static/images/step_1.png" />
            <H3>Step 1</H3>
            <H5>Join the sizing revolution and figure out your size</H5>
            <Button primary>Pre-order</Button>
          </Step>
          <Step>
            <Image width="100%" height={450} src="/static/images/step_2.png" />
            <H3>Step 2</H3>
            <H5>
              Download our Chrome Extension and start shopping personally
              online.
            </H5>
            <Button primary>Get the Extension</Button>
          </Step>
        </StepsContainer>
      </Wrapper>
    );
  }
}
