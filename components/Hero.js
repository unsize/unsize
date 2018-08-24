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
          body={`Unsize eliminates the question of “will this fit me?” for online shoppers while making fashion more inclusive.`}
          ctaHref="http://eepurl.com/cOEcNn"
          ctaText="Learn More"
          external
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
