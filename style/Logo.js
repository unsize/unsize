import styled from 'styled-components';

const Logo = styled.img.attrs({
  src: props => props.transparent ? '/static/images/logo.png' : 'static/images/logo_opaque.png'
})`
  width: 50px;
  height: 50px;
  display: block;
  margin: auto;
`;

export default Logo;
