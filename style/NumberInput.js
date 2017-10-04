import styled from 'styled-components';
import { background, workSansFont } from './constants';

const NumberInput = styled.input.attrs({
  type: 'number',
  min: 0,
  placeholder: props => props.placeholder,
})`
  background-color: ${background};
  border: 2px solid #000;
  border-radius: 10px;
  font-family: ${workSansFont};
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  outline: none;
  &:focus {
    background-color: #fff;
    border-color: #0B37F5;
  }
`;

export default NumberInput;
