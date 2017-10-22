import styled from 'styled-components';
import {
  backgroundColor,
  black,
  blue,
  borderSolid,
  borderRadiusLg,
  elemSpacingXs,
  elemSpacingSm,
  fontSizeNormal,
  fontSizeCaption,
  smoke,
  transitionFastEase,
  unfocusedGray,
  white,
  workSansFont
} from './constants';

const InputElem = styled.input`
  position: relative;
  width: 100%;
  background-color: ${backgroundColor};
  border: none;
  border-bottom: ${borderSolid} ${unfocusedGray};
  font-family: ${workSansFont};
  font-size: ${fontSizeNormal};
  margin: auto;
  outline: none;
  padding: ${elemSpacingXs} 0;
  transition: ${transitionFastEase};
  &:focus {
    border-color: ${blue};
  }
  &:focus + label {
    color: ${blue};
  }
  &:focus + label, &:valid + label {
    font-size: ${fontSizeCaption};
    top: 0;
    transform: translateY(-75%);
  }
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: 50%;
  color: ${unfocusedGray};
  font-family: ${workSansFont};
  font-size: ${fontSizeNormal};
  transform: translateY(-50%);
  transition: ${transitionFastEase};
  z-index: 1;
`;

const InputGroup = styled.div`
  margin: ${fontSizeNormal} 0 ${elemSpacingXs};
  position: relative;
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
