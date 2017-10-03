import styled from 'styled-components';
import { halisFont } from './constants';

const PrimaryButton = styled.button`
    font-family: ${halisFont};
    width: 200px;
    height: 40px;
    border-radius: 10px;
    background: none;
    border-style: solid;
    border-width: 1px;
    border-color: #000;
    margin: 10px auto;
    font-size: 16px;
    display: block;
`;

export default PrimaryButton;