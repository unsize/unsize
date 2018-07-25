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

const products = {
    "0": {
    name: 'Product 1',
    sizes: {
        x_small: { id: 'YzcxL', link: 'https://gumroad.com/l/YzcxL' },
        small: { id: 'YzcxL', link: 'https://gumroad.com/l/YzcxL' },
        medium: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' },
        large: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' },
        x_large: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' }
        }
    },
    "1": {
        name: 'Product 2',
        sizes: {
          x_small: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' },
          small: { id: 'YzcxL', link: 'https://gumroad.com/l/YzcxL' },
          medium: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' },
          large: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' },
          x_large: { id: 'QFQXI', link: 'https://gumroad.com/l/QFQXI' }
        }
    },
    "2": {
        name: 'Product 3',
        sizes: {
        x_small: { id: 'fDfQX', link: 'https://gumroad.com/l/fDfQX' },
        small: { id: 'YzcxL', link: 'https://gumroad.com/l/YzcxL' },
        medium: { id: 'fDfQX', link: 'https://gumroad.com/l/fDfQX' },
        large: { id: 'fDfQX', link: 'https://gumroad.com/l/fDfQX' },
        x_large: { id: 'fDfQX', link: 'https://gumroad.com/l/fDfQX' }
        }
    }
}

const Products = styled.div`
  display: flex;
`;



export default class Product extends React.Component {
componentDidMount() {
    console.log('here')
}
  render() {
    const {size, product} = this.props.url.query;
    console.log(products[product].sizes, product);
    const productObj = products[product].sizes[size];


    return (
        <div>
            <h2>{size}</h2>
            <h2>{product}</h2>
            {this.props.url.query &&
            <div className="gumroad-product-embed"
              data-gumroad-product-id={productObj.id}>
                <a href={productObj.link}>Loading...</a>
            </div>
            }
        </div>
    );
  }
}
