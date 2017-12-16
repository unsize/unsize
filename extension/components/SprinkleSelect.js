import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import { Image } from 'style';
import { buttonColor, workSansFont } from 'style/constants';
import SprinkleSelector from './SprinkleSelector';

const sprinkles = fromJS([
  {
    name: 'boost',
    desc: 'efficient, organized, loves simplicity'
  },
  {
    name: 'confetti',
    desc: 'extroverted, crowd-pleaser, outgoing'
  },
  {
    name: 'maca',
    desc: 'community-oriented, trend-savvy'
  },
  {
    name: 'scribble',
    desc: 'thoughtful, easy-going, pioneer'
  }
]);

const SprinkleSelectContainer = styled.div`
  margin: 20px;
`;

const SprinklesContainer = styled.div`
  display: flex;
  flex-flow: row;
  margin: 0 auto 20px;
  justify-content: space-evenly;
`;

const SprinkleDescription = styled.div`
  text-align: center;
  display: inline-block;
  background-color: ${buttonColor};
  width: 350px;
  padding: 10px;
  font-family: ${workSansFont};
  position: relative;
`;

const Pointer = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: -10px;
  left: ${({ pointTo }) => `${30 + 97 * pointTo}px`};
  background-color: ${buttonColor};
  transform: rotate(45deg);
`;

export default class SprinkleSelect extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.number
  };

  static defaultProps = {
    defaultValue: 0
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: props.defaultValue,
      lastHover: sprinkles.get(props.defaultValue).get('name')
    };
  }

  handleSprinkleClick(index) {
    this.props.onChange(index, this.state.selected);
    this.setState(() => {
      return {
        selected: index
      };
    });
  }

  handleSprinkleHover = sprinkle => {
    this.setState(() => {
      return {
        lastHover: sprinkle
      };
    });
  };

  onMouseLeave = () => {
    this.setState(old => {
      return {
        lastHover: sprinkles.get(old.selected).get('name')
      };
    });
  };

  render() {
    return (
      <SprinkleSelectContainer>
        <SprinklesContainer onMouseLeave={this.onMouseLeave}>
          {sprinkles.map((value, index) => (
            <SprinkleSelector
              key={index}
              selected={this.state.selected === index}
              name={value.get('name')}
              onClick={this.handleSprinkleClick.bind(this, index)}
              onMouseEnter={this.handleSprinkleHover}
            />
          ))}
        </SprinklesContainer>
        <SprinkleDescription>
          <Pointer
            pointTo={sprinkles.findIndex(
              value => this.state.lastHover === value.get('name')
            )}
          />
          {sprinkles
            .find(el => el.get('name') === this.state.lastHover)
            .get('desc')}
        </SprinkleDescription>
      </SprinkleSelectContainer>
    );
  }
}
