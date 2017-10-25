import styled from 'styled-components';
import { black, fontSizeNormal, workSansFont, workSansSemibold } from './constants';

const Link = styled.a`
  font-family: ${workSansFont};
  font-size: ${fontSizeNormal};
  font-weight: ${workSansSemibold};
  margin: 5px;
  color: ${black};
  text-decoration: none;
`;

export default Link;
