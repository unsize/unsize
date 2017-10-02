import styled from 'styled-components';

const ProfilePic = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  background-color: #fff;
  {/*background-image: url(${props => props.img})*/}
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 2px solid #000;
  margin-right: 0.5rem;
`;

export default ProfilePic;
