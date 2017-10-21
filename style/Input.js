import styled from 'styled-components';
import {
  backgroundColor,
  blue,
  borderSolidBlack,
  borderRadiusLg,
  elemSpacingSm,
  fontSizeNormal,
  white,
  workSansFont,
  workSansSemibold
} from './constants';

const InputElem = styled.input`
  background-color: ${backgroundColor};
  border: none;
  border-bottom: ${borderSolidBlack};
  font-family: ${workSansFont};
  font-size: ${fontSizeNormal};
  padding: ${elemSpacingSm} 12px;
  margin: auto;
  outline: none;
  position: relative;
  text-align: right;
  &:focus {
    background-color: ${white};
    border-color: ${blue};
  }
`;

const Label = styled.label`
  position: absolute;
  left: ${elemSpacingSm};
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  font-family: ${workSansFont};
  font-size: ${fontSizeNormal};
  font-weight: ${workSansSemibold};
`;

const Container = styled.div`
  position: relative;
  margin-bottom: ${elemSpacingSm};
`;

export default class Input extends React.Component {
  render() {
    const { labelName, placeholder, type } = this.props;
    return (
      <Container>
        <Label htmlFor={labelName}>{labelName}</Label>
        <InputElem id={labelName} placeholder={placeholder} type={type} />
      </Container>
    );
  }
}

//export default Input;
