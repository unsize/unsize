import styled from 'styled-components';

const Logo = styled.img.attrs({
  src: props =>
    props.transparent
      ? '/static/images/logo.png'
      : '/static/images/logo_opaque.png'
})`
  width: ${props => (props.width ? props.width : '50px')};
  height: ${props => (props.height ? props.height : '50px')};
  display: block;
  margin: auto;
`;

export default Logo;
