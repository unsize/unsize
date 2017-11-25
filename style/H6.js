import styled from 'styled-components';
import { workSansFont } from './constants';

const H6 = styled.h6`
  text-align: ${props => (props.align ? props.align : 'left')};
  font-family: ${workSansFont};
  font-weight: normal;
  font-size: 20px;
  margin: 5px 0px 20px 0;
  color: #9b9b9b;
`;

export default H6;
