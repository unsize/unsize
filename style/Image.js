import styled from 'styled-components';
import {
  black,
  borderRadiusSm,
  borderSolid,
  elemSpacingXs,
  elemSpacingSm,
  elemSpacingMd,
  elemSpacingLg,
  pink,
  brandBlueBorder,
  brandGreenBorder,
  brandPinkBorder,
  brandYellowBorder
} from './constants';

const Image = styled.img`
  height: ${props => (props.height ? props.height : 'auto')};
  width: ${props => (props.width ? props.width : 'auto')};
  padding: ${({ border, padding }) =>
    border ? '15px 30px' : padding ? padding : '0'};
  border: ${({ border }) => {
    switch (border) {
      case 'blue':
        return brandBlueBorder;
      case 'green':
        return brandGreenBorder;
      case 'yellow':
        return brandYellowBorder;
      case 'pink':
        return brandPinkBorder;
      default:
        return 'none';
    }
  }};
`;

export default Image;
