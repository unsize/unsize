import styled from 'styled-components';
import {
  backgroundColor,
  black,
  blue,
  borderSolidSmoke,
  borderRadiusLg,
  elemSpacingSm,
  elemSpacingMd,
  fontSizeNormal,
  fontSizeCaption,
  smoke,
  white,
  workSansFont
} from './constants';

const InputElem = styled.input`
  background-color: ${backgroundColor};
  border: none;
  border-bottom: ${borderSolidSmoke};
  font-family: ${workSansFont};
  font-size: ${fontSizeNormal};
  padding: ${elemSpacingSm} 0;
  margin: auto;
  outline: none;
  position: relative;
  transition: 0.25s ease;
  width: 80%;
  &:focus {
    border-color: ${blue};
  }
  &:focus + label, &:valid + label {
    transform: translateY(-200%);
    font-size: ${fontSizeCaption};
  }
  &:focus + label {
    color: ${blue};
  }
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  font-family: ${workSansFont};
  font-size: ${fontSizeNormal};
  color: ${smoke};
  transition: 0.25s ease;
`;

const InputGroup = styled.div`
  position: relative;
  margin-top: ${fontSizeNormal};
  margin-bottom: ${fontSizeCaption};
`;

export default class Input extends React.Component {
  render() {
    const { labelName, placeholder, type } = this.props;
    return (
      <InputGroup>
        <InputElem id={labelName} placeholder={placeholder} type={type} required />
        <Label htmlFor={labelName}>{labelName}</Label>
      </InputGroup>
    );
  }
}
