import React from 'react';
import { Col } from '/Users/Jon/Desktop/unsize/components/grid';

class ContentContainer extends React.Component {
  render() {
    var styles = {
      background: 'url(' + this.props.img + ') no-repeat center center',
      backgroundSize: 'cover',
      position: 'absolute'
    };

    return (
      <Col
        xsWidth={this.props.width[3]}
        smWidth={this.props.width[2]}
        mdWidth={this.props.width[1]}
        lgWidth={this.props.width[0]}
        xsHeight={this.props.height[3]}
        smHeight={this.props.height[2]}
        mdHeight={this.props.height[1]}
        lgHeight={this.props.height[0]}
        xsXOffset={this.props.x[3]}
        smXOffset={this.props.x[2]}
        mdXOffset={this.props.x[1]}
        lgXOffset={this.props.x[0]}
        xsYOffset={this.props.y[3]}
        smYOffset={this.props.y[2]}
        mdYOffset={this.props.y[1]}
        lgYOffset={this.props.y[0]}
        xsZ={this.props.z[3]}
        smZ={this.props.z[2]}
        mdZ={this.props.z[1]}
        lgZ={this.props.z[0]}
        style={styles}
        className={this.props.className}
      />
    );
  }
}

export default ContentContainer;
