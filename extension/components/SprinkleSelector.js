import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { workSansFont, smoke, white, blue } from 'style/constants';

const Sprinkle = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid ${white};
  position: relative;
  top: -61px;
`;

const SelectedRing = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background-color: ${({ selected }) => (selected ? blue : white)};
`;

const SprinkleName = styled.span`
  font-family: ${workSansFont};
  color: ${smoke};
  margin-top: 5px;
`;

const SprinkleSelectorContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: top;
`;

const SprinkleWrapper = styled.div`
  height: 65px;
  position: relative;
`;

const Check = styled.img.attrs({
  src: '/static/images/selected.png'
})`
  width: 20px;
  height: 20px;
  border: 2px solid ${white};
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
`;

export default class SprinkleSelector extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    onMouseEnter: PropTypes.func
  };

  static defaultProps = {
    onMouseEnter: () => {}
  };

  onMouseEnter = () => {
    this.props.onMouseEnter(this.props.name);
  };
  render() {
    return (
      <SprinkleSelectorContainer>
        <SprinkleWrapper>
          <SelectedRing selected={this.props.selected} />
          <Sprinkle
            onMouseEnter={this.onMouseEnter}
            onClick={this.props.onClick}
            onMouseLeave={this.props.onMouseLeave}
            src={`/static/images/profile_pics/${this.props.name}.png`}
          />
          {this.props.selected && <Check />}
        </SprinkleWrapper>
        <SprinkleName>{this.props.name}</SprinkleName>
      </SprinkleSelectorContainer>
    );
  }
}
