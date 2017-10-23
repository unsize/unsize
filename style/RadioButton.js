import styled from 'styled-components';
import {
  backgroundColor,
  black,
  blue,
  borderSolid,
  borderRadiusSm,
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

const Radio = styled.input`
  position: absolute;
  left: 0;
  opacity: 0;
  &:checked + label {
    background-color: #ddd;
  }
`;

const Label = styled.label`
  font-family: ${workSansFont};
  font-size: ${fontSizeNormal};
  color: ${smoke};
  padding: ${elemSpacingXs} ${elemSpacingSm};
  border-radius: ${borderRadiusSm};
`;

const InputGroup = styled.div`
  position: relative;
  margin-right: ${elemSpacingXs};
`;

export default class RadioButton extends React.Component {
  render() {
    const { groupName, labelName, checked } = this.props;
    let radio = <Radio id={labelName} type="radio" name={groupName} />;
    if (checked) {
      radio = <Radio id={labelName} type="radio" name={groupName} defaultChecked />;
    }
    return (
      <InputGroup>
        {radio}
        <Label htmlFor={labelName}>{labelName}</Label>
      </InputGroup>
    );
  }
}
