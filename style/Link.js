import styled from 'styled-components';
import { black, fontSizeNormal, workSansFont, workSansSemibold } from './constants';

const Link = styled.a.attrs({
  href: ({href}) => href,
  //onClick: chrome.tabs.create({url: ({href}) => href})
})`
  font-family: ${workSansFont};
  font-size: ${fontSizeNormal};
  font-weight: ${workSansSemibold};
  margin: 5px;
  color: ${black};
  text-decoration: none;
`;

export default Link;
