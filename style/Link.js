import styled from 'styled-components';
import {
  blue,
  white,
  fontSizeNormal,
  fontSizeSmall,
  workSansFont
} from './constants';

const Link = styled.a`
  font-family: ${workSansFont};
  font-size: ${props => (props.small ? fontSizeSmall : fontSizeNormal)};
  margin: 5px;
  color: ${({ color }) => color || blue};
  text-decoration: none;
  cursor: pointer;
`;

export default Link;
