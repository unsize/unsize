import styled from 'styled-components';
import { workSansFont } from './constants';

const H5 = styled.h5`
  font-family: ${workSansFont};
  text-align: ${props => (props.align ? props.align : 'left')};
  color: #4a4a4a;
  font-weight: 400;
  font-size: 20px;
`;

export default H5;
