import React from 'react';
import { H1, H6, Button, Image, P } from 'style';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImage = Image.extend`
  position: absolute;
  ${({ layout }) => (layout === 'left' ? 'right: 0' : 'left: 0')};
  top: 0;
  min-height: ${({ height }) => (height ? height : 'auto')};

  @media (max-width: 768px) {
    min-height: 0;
    height: ${({ tabletHeight }) => (tabletHeight ? tabletHeight : 'inherit')};
  }

  @media (max-width: 480px) {
    height: 100%;
    position: relative;
    padding: 20px;
    width: 90%;
  }
`;

const RowLayout = styled.section`
  min-height: ${({ height }) => (height ? height : 'auto')};
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  object-fit: contain;
  margin: 100px auto;

  h1 {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: ${({ tabletHeight }) => (tabletHeight ? tabletHeight : 'auto')};
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
`;

const TextLayout = styled.aside`
  margin-left: ${({ layout }) => (layout === 'left' ? '0' : 'auto')};
  max-width: 50%;
  min-width: 320px;
`;

const CTA = Button.extend`
  display: inline;
`;

class TwoColumnImageRow extends React.Component {
  getHeaderAlign(align = 'imgRight') {
    switch (align) {
      case 'imgLeft':
        return 'right';
      case 'imgRight':
        return 'left';
    }
  }

  render() {
    return (
      <RowLayout
        height={this.props.height}
        tabletHeight={this.props.tabletHeight}
        mobileHeight={this.props.mobileHeight}
      >
        <TextLayout layout={this.getHeaderAlign(this.props.layout)}>
          <H1 align="left">{this.props.title}</H1>
          <H6>{this.props.subtitle}</H6>
          <P>{this.props.body}</P>
          {this.props.ctaText && (
            <CTA align="left" primary={!!this.props.primaryCta}>
              {this.props.ctaText}
            </CTA>
          )}
        </TextLayout>
        <StyledImage
          layout={this.getHeaderAlign(this.props.layout)}
          height={this.props.height}
          tabletHeight={this.props.tabletHeight}
          mobileHeight={this.props.mobileHeight}
          src={this.props.imgUrl}
        />
      </RowLayout>
    );
  }
}

TwoColumnImageRow.propTypes = {
  height: PropTypes.string,
  layout: PropTypes.oneOf(['imgLeft', 'imgRight']),
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  primaryCta: PropTypes.bool,
  ctaText: PropTypes.string,
  imgUrl: PropTypes.string
};

export default TwoColumnImageRow;
