import styled from 'styled-components';

const Logo = styled.img.attrs({
  src: '/static/images/logo.png'
})`
  width: ${props => props.width ? props.width : '50px'};
  height: ${props => props.height ? props.height : '50px'};
  display: block;
  margin: auto;
`;

export default Logo;
