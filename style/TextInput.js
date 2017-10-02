import styled from 'styled-components';
import { workSansFont } from './constants';

const TextInput = styled.input.attrs({
  type: 'number',
  placeholder: props => props.placeholder,
})`
  border: 2px solid #000;
  border-radius: 10px;
  font-family: ${workSansFont};
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  width: 33%;
`;

export default TextInput;
