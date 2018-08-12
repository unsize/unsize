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
import Link from 'next/link';
import 'style/fontFaces';
import 'style/fontSizes';

const products = [
  {
    name: 'Product 1',
    sizes: {
      small: { id: 'NbIK', link: 'https://gumroad.com/l/NbIK' },
      medium: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' },
      xx_large: { id: 'BnPWi', link: 'https://gumroad.com/l/BnPWi' },
      xxxx_large: { id: 'PcNyA', link: 'https://gumroad.com/l/PcNyA' }
    }
  },
  {
    name: 'Product 2',
    sizes: {
      small: { id: 'NbIK', link: 'https://gumroad.com/l/NbIK' },
      medium: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' },
      xx_large: { id: 'BnPWi', link: 'https://gumroad.com/l/BnPWi' },
      xxxx_large: { id: 'PcNyA', link: 'https://gumroad.com/l/PcNyA' }
    }
  },
  {
    name: 'Product 3',
    sizes: {
      small: { id: 'NbIK', link: 'https://gumroad.com/l/NbIK' },
      medium: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' },
      xx_large: { id: 'BnPWi', link: 'https://gumroad.com/l/BnPWi' },
      xxxx_large: { id: 'PcNyA', link: 'https://gumroad.com/l/PcNyA' }
    }
  }
];

const Products = styled.div`
  display: flex;
  margin: 100px 0px;
`;

const Product = styled.div`
  flex: 1;

  margin: 10px 20px 10px 0px;
  border: 1px solid black;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export default class WhyUnsize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      size: 'medium',
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

  calculateSize(measures) {
    return 'medium';
  }
  onChange = e => {
    console.log();
    this.setState({ size: e.target.value });
  };
  renderProducts() {
    return products.map((product, key) => {
      const { measures, size } = this.state;
      return (
        <Product>
          <a href={`http://localhost:3000/product?product=${key}&size=${size}`}>
            <img src="/static/images/store/shirt2.png" />
          </a>
          <p>{`Product ${parseInt(key)}`}</p>
        </Product>
      );
    });
  }

  render() {
    const { measures, name, size } = this.state;

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
        <select value={size} onChange={this.onChange}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="xx_large">XX Large</option>
          <option value="xxxx_large">XXXX Large</option>
        </select>
        <Products>{this.renderProducts.bind(this)()}</Products>
      </Layout>
    );
  }
}
