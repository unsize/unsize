import React from 'react';
import { H1, H2, H4, H5, Intro, P, Button } from 'style';


export default class Why extends React.Component {
    render() {
        return(
            <div>
                <H1>Why Unsize?</H1>
                <div>
                    <H4>You said:</H4>
                    <H2>My thighs aren't made for jeans|</H2>
                    <H5>You talked, and we listened. After our extensive user research, we came up with a two part system to help remove the frustration and difficulty from online shopping.</H5>
                </div>
                <H2 align="left">Meet Tailor</H2>
                <Intro>Great things come in small packages.</Intro>
                <P>Meet our hardware! Ain't she a beaut? Aptly and affectionately called Tailor, our smart device can take your measurements accurately (up to an 1/8th of an centimeter)! The device will then send your measurements to our chrome extension via bluetooth and filter the clothing options by fit for you!</P>
                <Button width="120px">Pre-order</Button>

                <H2 align="left">Pattern Play</H2>
                <Intro>A pattern for every person.</Intro>
                <P>We’ve all had a terrible onilne shopping experience, and after talking to you, we found some common threads. To help shape our brand, we created a four personalities with correspoinding pattens: Boost, Maca, Scribble, and Confetti. Each one has seen some sh*t, and most people find one they relate to. Ready to find yours?s</P>
                <Button width="120px">Get Started</Button>
            </div>
        );
    }
}