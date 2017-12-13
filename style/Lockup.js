import styled from 'styled-components';

const Lockup = styled.img.attrs({
  src: ({ light }) =>
    light ? '/static/images/lockup_light.png' : '/static/images/lockup.png'
})`
  height: 36px;
  display: block;

  @media (max-width: 767px) {
    height: 30px;
  }
`;

export default Lockup;
