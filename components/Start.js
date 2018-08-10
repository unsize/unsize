import React from 'react';
import {
  H1 as _H1,
  H3 as _H3,
  H4,
  H6 as _H6,
  P as _P,
  Image,
  Button
} from 'style';
import styled from 'styled-components';
import _RowWrapper from './RowWrapper';
import TwoColumnImageRow from './TwoColumnImageRow';

const H3 = _H3.extend`
  margin-bottom: 0;
`;

const H6 = _H6.extend`
  margin: 15px auto;
`;

const P = _P.extend`
  margin: 15px auto;
`;

const H1 = _H1.extend`
  margin-bottom: 0;
`;
const RowWrapper = _RowWrapper.extend`
  padding-left: 60px;
  padding-right: 60px;

  @media (max-width: 480px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const StepWrapper = styled.div`
  max-height: 400px;
  max-width: 40%;
  @media (max-width: 768px) {
    min-height: 600px;
  }
  @media (max-width: 480px) {
    max-width: 100%;
    min-height: 0px;
  }
`;

const LastStepWrapper = styled.div`
  max-height: 400px;
  max-width: 40%;
  @media (max-width: 768px) {
    min-height: 500px;
  }
  @media (max-width: 480px) {
    max-width: 100%;
    min-height: 0px;
  }
`;

export default class Start extends React.Component {
  constructor() {
    super();
    this.state = { stepOneClicked: true, stepTwoClicked: true };
  }

  renderStepOne = () => {
    return (
      <StepWrapper>
        {this.state.stepOneClicked ? (
          <div>
            <H3>Step 1</H3>
            <H6>
              Figure out your measurements with the help of Tailor, our
              measuring experience.
            </H6>
          </div>
        ) : (
          <div>
            <H3>Meet Tailor</H3>
            <P>
             Tailor takes your measurements
              accurately (up to an 1/8th of an centimeter) without showing size! The device then
              sends your measurements to our webapp seamlessly so
              you can get to shopping sooner!
            </P>
          </div>
        )}
        <Button
          style={{ marginRight: '5px' }}
          onClick={() =>
            this.setState({ stepOneClicked: !this.state.stepOneClicked })
          }
        >
          {this.state.stepOneClicked ? 'Learn more' : 'Close'}
        </Button>

        <Button primary onClick={() => open('http://eepurl.com/cOEcNn')}>
          Join our Beta
        </Button>
      </StepWrapper>
    );
  };

  renderStepTwo = () => {
    return (
      <StepWrapper>
        {this.state.stepTwoClicked ? (
          <div>
            <H3>Step 2</H3>
            <H6>
            Get shopping! Our webapp works with a number of sites so instead of worrying about size boxes you can focus on what makes you feel confident.
            </H6>
          </div>
        ) : (
          <div>
            <H3>Webapp</H3>
            <P>
              Our webapp (the brains of the operation) tackles
              inconsistent and confusing with sizing. When your measurements are
              entered, it works with select sites to automatically show clothing in your personzlied size. It’s with you for every step of the process to
              ensure you’re confident in your purchase.
            </P>
          </div>
        )}

        <Button
          style={{ marginRight: '5px' }}
          onClick={() =>
            this.setState({ stepTwoClicked: !this.state.stepTwoClicked })
          }
        >
          {this.state.stepTwoClicked ? 'Learn more' : 'Close'}
        </Button>
        <Button primary onClick={() => open('http://eepurl.com/cOEcNn')}>
          Join our Beta
        </Button>
      </StepWrapper>
    );
  };

  // renderLastStep = () => {
  //   return (
  //     <LastStepWrapper>
  //       <H3>Step 3</H3>
  //       <H6>
  //         Get shopping! Our extension works with a number of sites to choose the
  //         best size for you based on your measurements.
  //       </H6>
  //     </LastStepWrapper>
  //   );
  // };
  render() {
    return (
      <RowWrapper>
        <H1 align="left">Get Started</H1>
        <TwoColumnImageRow
          contentComponent={this.renderStepOne}
          imgUrl="https://media.giphy.com/media/xT1R9yrDcsDL5t65DW/giphy.gif"
          layout="imgRight"
          height="300px"
        />
        <TwoColumnImageRow
          contentComponent={this.renderStepTwo}
          imgUrl="/static/images/step_1.png"
          layout="imgRight"
          height="300px"
        />
        <TwoColumnImageRow
        //   contentComponent={this.renderLastStep}
        // imgUrl="/static/images/step_1.png"
        //   layout="imgRight"
          height="0px"
        />
      </RowWrapper>
    );
  }
}
