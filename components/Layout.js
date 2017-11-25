import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Head from 'next/head';
import PageWrapper from './PageWrapper';

const Layout = ({ children, title = 'Unsize' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/static/favicon.png" />
      </Head>
      <Nav />
      <main>
        <PageWrapper>{children}</PageWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
