import React from 'react';
import Hero from '../components/Hero';
import WhyUnsize from '../components/WhyUnsize';
import Start from '../components/Start';
import Layout from '../components/Layout';
import BrandListing from '../components/BrandListing';
import styled from 'styled-components';

export default () => {
  return (
    <Layout>
      <Hero />
      <WhyUnsize />
      <Start />
      {/* <BrandListing /> */}
    </Layout>
  );
};
