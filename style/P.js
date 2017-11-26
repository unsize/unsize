import styled from 'styled-components';
import {
  elemSpacingXs,
  fontSizeNormal,
  fontSizeSmall,
  smoke,
  workSansFont,
  elemSpacingLg
} from './constants';

const P = styled.p`
  font-family: ${workSansFont};
  font-size: ${props => (props.small ? fontSizeSmall : fontSizeNormal)};
  color: ${smoke};
  margin-bottom: ${elemSpacingLg};
`;

export default P;
