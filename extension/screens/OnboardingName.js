import React from 'react';
import { Logo, H2, P, Button, Input } from 'style';

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
