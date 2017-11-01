import styled from 'styled-components';
import {
  black,
  borderRadiusSm,
  borderSolid,
  elemSpacingXs,
  elemSpacingMd,
  elemSpacingLg,
  pink
} from './constants';

const Image = styled.img`
  height: ${props => props.large ? elemSpacingLg : elemSpacingMd};
  width: ${props => props.large ? elemSpacingLg : elemSpacingMd};
  background-color: ${pink};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${props => props.rounded ? '50%' : borderRadiusSm};
`;

export default Image;
