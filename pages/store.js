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

const products = [
  {
    name: 'Product 1',
    sizes: {
      x_small: { id: 'YzcxL', link: 'https://gumroad.com/l/YzcxL' },
      medium: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' },
      large: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' },
      x_large: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' }
    }
  },
  {
    name: 'Product 2',
    sizes: {
      x_small: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' },
      medium: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' },
      large: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' },
      x_large: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' }
    }
  },
  {
    name: 'Product 3',
    sizes: {
      x_small: { id: 'fDfQX', link: 'https://gumroad.com/l/fDfQX' },
      medium: { id: 'fDfQX', link: 'https://gumroad.com/l/fDfQX' },
      large: { id: 'fDfQX', link: 'https://gumroad.com/l/fDfQX' },
      x_large: { id: 'fDfQX', link: 'https://gumroad.com/l/fDfQX' }
    }
  }
];

const Products = styled.div`
  display: flex;
`;

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

  calculateSize(measures) {
    return 'small';
  }

  renderProducts(size) {
    return products.map(product => {
      const sizedProduct = product.sizes[size];
      return (
        <div>
          <div
            className="gumroad-product-embed"
            data-gumroad-product-id={sizedProduct.id}
          >
            <a href={sizedProduct.link}>Loading...</a>
          </div>
        </div>
      );
    });
  }

  render() {
    const { measures, name } = this.state;
    const size = this.calculateSize(measures);

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
        <Products>{this.renderProducts('x_small')}</Products>
      </Layout>
    );
  }
}
