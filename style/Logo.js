import styled from 'styled-components';
import { pSize } from './constants'

const Logo = styled.img.attrs({
  src: '/static/images/logo.png'
})`
  display: block;
  height: 80px;
  margin: -${pSize} auto 0;
`;

export default Logo;
