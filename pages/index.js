import React from 'react';
import About from '../components/About';
import WhyUnsize from '../components/WhyUnsize';
import Start from '../components/Start';
import Layout from '../components/Layout';
import TwoColumnImageRow from '../components/TwoColumnImageRow';
import BrandListing from '../components/BrandListing';

export default () => {
  return (
    <Layout>
      <TwoColumnImageRow
        title="Welcome to your best fit ever."
        body={`Enough is enough. It's time to unbox ourselves and wear what we want
      to, in clothing that feels amazing, because why not?`}
        imgUrl="/static/images/hero.png"
        primaryCta
        ctaText="Get Started"
        height="450px"
        tabletHeight="425px"
      />
      <WhyUnsize />
      <TwoColumnImageRow
        title="Meet Tailor"
        subtitle="Great things come in small packages"
        body={`Meet our hardware! Ain't she a beaut? Aptly and affectionately
          called Tailor, our smart device can take your measurements
          accurately (up to an 1/8th of an centimeter)! The device will then
          send your measurements to our chrome extension via bluetooth and
          filter the clothing options by fit for you!`}
        imgUrl="/static/images/meet_tailor.png"
        primaryCta
        ctaText="Pre-order"
        height="600px"
        tabletHeight="450px"
      />

      <TwoColumnImageRow
        title="Chrome Extension"
        subtitle="Magic's Never Looked So Good"
        body={`This is the age of the internet, and we here at unsize understand
      that. To try to combat the over-abundance of internet information,
      we created a chrome extension. Our extention works with our
      partnered sites to automatically determine the ideal size for you
      based on your given measurements. The extension is with you
      through your entire shopping experience, ensuring a smooth, sunny
      surf on the web.`}
        imgUrl="/static/images/extension.png"
        layout="imgLeft"
        primaryCta
        ctaText="Get Started"
        height="350px"
        tabletHeight="250px"
      />
      <BrandListing />
      <Start />
    </Layout>
  );
};
