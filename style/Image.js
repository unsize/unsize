import styled from 'styled-components';
import {
  black,
  borderRadiusSm,
  borderSolid,
  buttonColor,
  elemSpacingXs,
  elemSpacingMd,
  elemSpacingLg
} from './constants';

const Image = styled.img`
  height: ${props => props.large ? elemSpacingLg : elemSpacingMd};
  width: ${props => props.large ? elemSpacingLg : elemSpacingMd};
  background-color: ${buttonColor};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${props => props.rounded ? '50%' : borderRadiusSm};
  border: ${borderSolid} ${black};
  margin-right: ${elemSpacingXs};
`;

export default Image;
