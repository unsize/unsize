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
`;

export default class Product extends React.Component {
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

  render() {
    const { size, product } = this.props.url.query;

    const productObj = products[product].sizes[size];
    return (
      <div>
        <h2>{size}</h2>
        <h2>Product {parseInt(product)}</h2>
        <h3>{this.state.name}</h3>
        {productObj.link && (
          <div
            className="gumroad-product-embed"
            data-gumroad-product-id={productObj.id}
          >
            <a href={productObj.link}>Loading...</a>
          </div>
        )}
      </div>
    );
  }
}
