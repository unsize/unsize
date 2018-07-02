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
  background-color: ${white};
  border: none;
  border-bottom: ${borderSolid} ${unfocusedGray};
  font-family: ${workSansFont};
  font-size: ${fontSizeNormal};
  padding: ${elemSpacingSm} 12px;
  margin: auto 0;
  outline: none;
  padding: ${elemSpacingXs} 0;
  transition: ${transitionFastEase};
  &:focus {
    border-color: ${blue};
  }
  &:focus + label {
    color: ${blue};
  }
  &:focus + label,
  &:valid + label {
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
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue || '',
      required: true
    };
  }

  updateValue(event) {
    if (this.props.updateValue) this.props.updateValue({name: event.target.id, value: event.target.value});
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const { focused, labelName, type } = this.props;
    return (
      <InputGroup className="input-group">
        <InputElem
          value={this.state.value}
          onChange={this.updateValue.bind(this)}
          id={labelName}
          type={type}
          required
          autoFocus={focused}
        />
        <InputLabel htmlFor={labelName}>{labelName}</InputLabel>
      </InputGroup>
    );
  }
}
