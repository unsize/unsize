import extend from 'styled-components';
import Form from './Form';
import { elemSpacingMd, fontSizeNormal } from './constants';

const TwoColumnForm = Form.extend`
  input {
    margin-bottom: ${fontSizeNormal};
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
