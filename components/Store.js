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
          title="Shop Unsize! Find your fit."
          body={`Grab some Unsize style for your closest while trying out our chrome extension.`}
          primaryCta
          height="100px"
          tabletHeight="100px"
          mobileHeight="100px"
        />
      </RowWrapper>
    );
}
}
