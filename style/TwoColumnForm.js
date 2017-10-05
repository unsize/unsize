import style from 'styled-components';
import Form from './Form';
import { elemSpacingMd, pSize } from './constants';

const TwoColumnForm = Form.extend`
  input {
    margin-bottom: ${pSize};
    width: 27%;
    &:nth-child(2n + 1) {
      margin-right: ${elemSpacingMd};
    }
    &:nth-child(2n + 2) {
      margin-left: ${elemSpacingMd};
    }
  }
  button {
    margin-top: 4px;
  }
`;

export default TwoColumnForm;
