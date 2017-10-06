import styled from 'styled-components';
import { pSize } from './constants'

const Logo = styled.img.attrs({
  src: '/static/images/logo.png'
})`
  width: 50px;
  height: 50px;
  display: block;
  margin: auto;
`;

export default Logo;
