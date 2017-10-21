import styled from 'styled-components';
import { backgroundColor } from './constants';

const Window = styled.div`
  width: 350px;
  min-height: 250px;
  margin:auto;
  background-color: ${backgroundColor};
  justify-content: center;
  align-items: center;
  padding: 15px 8px 0px 8px;
`;

export default Window;
