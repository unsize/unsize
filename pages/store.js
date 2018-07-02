import React from 'react';
import Hero from '../components/Hero';
import Store from '../components/Store';
import StorePopover from '../components/Store/StorePopover';
import Layout from '../components/Layout';
import BrandListing from '../components/BrandListing';
import styled from 'styled-components';
import MailChimp from '../components/MailChimp';
import Method from '../extension/screens/onboarding/Method';
import Router from 'route-lite';
import Window from '../extension/components/Window';
import 'style/fontFaces';
import 'style/fontSizes';

export default class WhyUnsize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      measures: {
        neck: null,
        chest: null,
        sleeve: null
      }
    };
  }

  setName(name) {
    this.setState({ name });
  }

  setMeasurements(measures) {
    this.setState({ measures });
  }

  render() {
    const { measures, name } = this.state;
    return (
      <Layout>
        <StorePopover
          name={name}
          setName={this.setName.bind(this)}
          measures={measures}
          setMeasurements={this.setMeasurements.bind(this)}
        />
        <p>{measures.neck} Neck</p>
        <p>{measures.chest} Chest</p>
        <p>{measures.sleeve} Sleeve</p>
        <div className="gumroad-product-embed" data-gumroad-product-id="YzcxL">
          <a href="https://gumroad.com/l/YzcxL">Loading...</a>
        </div>
      </Layout>
    );
  }
}
