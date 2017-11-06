import styled from 'styled-components';
import {
  backgroundColor,
  blue,
  borderSolidBlack,
  borderRadiusLg,
  elemSpacingSm,
  fontSizeNormal,
  white,
  workSansFont
} from './constants';

const Input = styled.input.attrs({
  type: ({ type }) => (type === 'number' ? type : 'text'),
  min: ({ min }) => (min ? min : 0),
  placeholder: ({ placeholder }) => placeholder
})`
  background-color: ${backgroundColor};
  border: ${borderSolidBlack};
  border-radius: ${borderRadiusLg};
  font-family: ${workSansFont};
  font-size: ${fontSizeNormal};
  padding: ${elemSpacingSm} 12px;
  margin: auto 0;
  outline: none;
  &:focus {
    background-color: ${white};
    border-color: ${blue};
  }
`;

export default Input;
