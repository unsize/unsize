import styled from 'styled-components';

const Lockup = styled.img.attrs({
  src: ({ light }) =>
    light ? '/static/images/lockup_light.png' : '/static/images/lockup.png'
})`
  height: 36px;
  display: block;
`;

export default Lockup;
