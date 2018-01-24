import React from 'react';
import { H1, H6, Button, Image, P } from 'style';
import styled from 'styled-components';
import { setInterval, clearInterval } from 'timers';
import Link from 'next/link';
import TwoColumnImageRow from './TwoColumnImageRow';
import RowWrapper from './RowWrapper';

export default class WhyUnsize extends React.Component {
  render() {
    return (
      <RowWrapper>
        <TwoColumnImageRow
          title="Welcome to your best fit ever."
          body={`Unsize eliminates the questions of “will this fit me?” for online shoppers while making fashion more inclusive`}
          ctaHref="/#start"
          ctaText="Get Started"
          primaryCta
          imgUrl="/static/images/hero.png"
          layout="imgRight"
          height="400px"
          tabletHeight="400px"
          mobileHeight="400px"
        />
      </RowWrapper>
    );
  }
}
