import React from 'react';
import { Button, H1, Link, P, TwoColumnLayout } from 'style';
import {
  blue,
  elemSpacingXs,
  elemSpacingSm,
  elemSpacingMd,
  elemSpacingLg
} from 'style/constants';
import { BackProfileHeader, Retailer, ScreenContainer } from '../../components';

const EndContainer = ScreenContainer.extend`
  #subheader {
    margin-bottom: ${elemSpacingMd};
  }
  button {
    margin-bottom: ${elemSpacingSm};
  }
  #partners {
    margin: ${elemSpacingSm} 0 calc(${elemSpacingSm} + ${elemSpacingXs});
    background: ${blue};
    padding: calc(${elemSpacingXs} + ${elemSpacingSm})
      calc(${elemSpacingSm} + ${elemSpacingLg});
  }
`;

export default class FinishRetailers extends React.Component {
  render() {
    return (
      <EndContainer>
        <BackProfileHeader {...this.props} />
        <H1>Woo! You're all set!</H1>
        <P id="subheader">Start shopping with our partnered brands</P>
        <TwoColumnLayout id="partners">
          <Retailer logo="/static/images/retailers/asos.png" />
          <Retailer logo="/static/images/retailers/lyst.png" />
          <Retailer logo="/static/images/retailers/shopstyle.png" />
        </TwoColumnLayout>
        <Link small>Meet Tailor</Link>
      </EndContainer>
    );
  }
}
