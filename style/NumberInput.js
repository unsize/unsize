import styled from 'styled-components';
import { background, blue, border, borderRadius, pSize, white, workSansFont } from './constants';

const NumberInput = styled.input.attrs({
  type: 'number',
  min: 0,
  placeholder: props => props.placeholder,
})`
  background-color: ${background};
  border: ${border};
  border-radius: ${borderRadius};
  font-family: ${workSansFont};
  font-size: ${pSize};
  padding: 8px 12px;
  outline: none;
  &:focus {
    background-color: ${white};
    border-color: ${blue};
  }
`;

export default NumberInput;
