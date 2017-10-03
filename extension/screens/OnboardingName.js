import React from 'react';
import Logo from '../../style/Logo';
import H2 from '../../style/H2';
import P from '../../style/P';
import Button from '../../style/Button';
import Input from '../../style/Input';

export default class OnboardingWelcome extends React.Component {

    render() {
        return (
            <div>
                <Logo src="icon.png" />
                <H2>We want to help you find YOUR fit</H2>
                <P>But first, can we get your name?</P>
                <Input/>
                <Button>Next</Button>
            </div>
        );
    }
}