import styled from 'styled-components';
import { border, buttonColor } from './constants';

const Image = styled.img`
  height: ${props => props.large ? '48px' : '24px'};
  width: ${props => props.large ? '48px' : '24px'};
  background-color: ${buttonColor};
  /*background-image: url(${props => props.img});*/
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${props => props.rounded ? '50%' : '3px'};
  border: ${border};
  margin-right: 8px;
`;

export default Image;
