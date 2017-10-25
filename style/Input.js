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
import Label from './Label';

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

const InputLabel = Label.extend`
  position: absolute;
  left: 0;
  top: 50%;
  color: ${unfocusedGray};
  transform: translateY(-50%);
  transition: ${transitionFastEase};
`;

const InputGroup = styled.div`
  position: relative;
  margin: ${fontSizeNormal} 0 ${elemSpacingXs};
`;

export default class Input extends React.Component {
  render() {
    const { focused, labelName, type } = this.props;
    return (
      <InputGroup>
        <InputElem id={labelName} type={type} required autoFocus={focused} />
        <InputLabel htmlFor={labelName}>{labelName}</InputLabel>
      </InputGroup>
    );
  }
}
