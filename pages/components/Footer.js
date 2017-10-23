import React from 'react';
import { H4, P, Input, Button } from 'style';


export default class Footer extends React.Component {
    render() {
        return(
            <div>
                <H4 align="left">Find a fit that makes you feel good.</H4>
                <P>Leave your email here and join the sizing revolution</P>
                <Input/>
                <Button primary>Subscribe</Button>
            </div>
        );
    }
}