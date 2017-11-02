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
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.width ? props.width : 'auto'};
`;

export default Image;
