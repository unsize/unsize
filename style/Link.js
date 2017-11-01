import styled from 'styled-components';
import { black, fontSizeNormal, fontSizeSmall, workSansFont } from './constants';

const Link = styled.a`
  font-family: ${workSansFont};
  font-size: ${props => props.small ? fontSizeSmall : fontSizeNormal};
  font-weight: bold;
  margin: 5px;
  color: ${black};
  text-decoration: none;
  cursor: pointer;
`;

export default Link;
