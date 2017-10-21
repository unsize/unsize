import styled from 'styled-components';
import { fontSizeNormal, workSansFont, workSansSemibold } from './constants';

const Link = styled.a.attrs({
  href: ({href}) => href,
})`
  font-family: ${workSansFont};
  font-size: ${fontSizeNormal};
  font-weight: ${workSansSemibold};
  margin: 5px;
`;

export default Link;
