import React from 'react';
import { H1, Intro, Button } from 'style';


export default class Hero extends React.Component {
    render() {
        return(
            <div>
                <H1 align="left">Welcome to your best fit ever.</H1>
                <Intro>Enough is enough. It's time to unbox ourselves and wear what we want to, in clothing that feels amazing, because why not?</Intro>
                <Button primary width="120px">Get Started</Button>
            </div>
        );
    }
}