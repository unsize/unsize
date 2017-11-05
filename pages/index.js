import React from 'react';
import { Div } from 'style';
import { Grid } from 'react-flexbox-grid';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Why from '../components/Why';
import Start from '../components/Start';
import Footer from '../components/Footer';

export default () => (
  <Div>
    <Grid style={{ maxWidth: 1024 }}>
      <Nav />
      <Hero />
      <About />
      <Why />
      <Start />
      <Footer />
    </Grid>
  </Div>
);
