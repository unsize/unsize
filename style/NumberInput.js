import styled from 'styled-components';
import { background, blue, borderSolidBlack, borderRadiusLg, elemSpacingSm, pSize, white, workSansFont } from './constants';

const NumberInput = styled.input.attrs({
  type: 'number',
  min: 0,
  placeholder: props => props.placeholder,
})`
  background-color: ${background};
  border: ${borderSolidBlack};
  border-radius: ${borderRadiusLg};
  font-family: ${workSansFont};
  font-size: ${pSize};
  padding: ${elemSpacingSm} 12px;
  outline: none;
  &:focus {
    background-color: ${white};
    border-color: ${blue};
  }
`;

export default NumberInput;
