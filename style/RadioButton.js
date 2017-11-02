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
  green,
  smoke,
  transitionFastEase,
  unfocusedGray,
  white,
  workSansFont
} from './constants';
import Label from './Label';

const Radio = styled.input.attrs({
  type: "radio"
})`
  position: absolute;
  left: 0;
  opacity: 0;
  &:checked + label {
    background-color: ${green};
    color: ${white};
  }
`;

const RadioLabel = Label.extend`
  color: ${smoke};
  padding: ${elemSpacingXs} ${elemSpacingSm};
  cursor: pointer;
`;

const InputGroup = styled.div`
  position: relative;
  margin-right: ${elemSpacingXs};
`;

export default class RadioButton extends React.Component {
  render() {
    const { groupName, labelName, checked } = this.props;
    return (
      <InputGroup>
        <Radio id={labelName} name={groupName} defaultChecked={checked} />
        <RadioLabel htmlFor={labelName}>{labelName}</RadioLabel>
      </InputGroup>
    );
  }
}
