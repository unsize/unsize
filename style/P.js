import styled from 'styled-components';
import {
  elemSpacingXs,
  fontSizeNormal,
  fontSizeSmall,
  smoke,
  workSansFont,
  elemSpacingMd
} from './constants';

const P = styled.p`
  font-family: ${workSansFont};
  font-size: ${props => (props.small ? fontSizeSmall : fontSizeNormal)};
  color: ${props => (props.white ? '#ffffff' : smoke)};
  margin-bottom: ${props => (props.noMargin ? 0 : elemSpacingMd)};
  margin-top: 0;
`;

export default P;
