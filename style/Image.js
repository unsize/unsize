import styled from 'styled-components';
import { borderRadiusSm, borderSolidBlack, buttonColor, elemSpacingSm, elemSpacingMd, elemSpacingLg } from './constants';

const Image = styled.img`
  height: ${props => props.height ? props.height : props.large ? elemSpacingLg : elemSpacingMd};
  width: ${props => props.width ? props.width : props.large ? elemSpacingLg : elemSpacingMd};
  background-color: ${buttonColor};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${props => props.rounded ? '50%' : borderRadiusSm};
  border: ${borderSolidBlack};
  margin-right: ${elemSpacingSm};
`;

export default Image;
