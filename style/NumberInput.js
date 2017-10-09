import styled from 'styled-components';
import { backgroundColor, blue, borderSolidBlack, borderRadiusLg, elemSpacingSm, fontSizeNormal, white, workSansFont } from './constants';

const NumberInput = styled.input.attrs({
  type: 'number',
  min: 0,
  placeholder: props => props.placeholder,
})`
  background-color: ${backgroundColor};
  border: ${borderSolidBlack};
  border-radius: ${borderRadiusLg};
  font-family: ${workSansFont};
  font-size: ${fontSizeNormal};
  padding: ${elemSpacingSm} 12px;
  outline: none;
  &:focus {
    background-color: ${white};
    border-color: ${blue};
  }
`;

export default NumberInput;
