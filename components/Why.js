import React from 'react';
import { H1, H2, H4, H5, H6, P, Button, Image } from 'style';
import { Row, Col } from 'react-flexbox-grid';

export default class Why extends React.Component {
  render() {
    return (
      <div>
        <Row style={{ marginTop: 100 }}>
          <Col xs={12}>
            <H1>Why Unsize?</H1>
            <div>
              <H4>You said:</H4>
              <H2>My thighs aren't made for jeans|</H2>
              <Row center="xs">
                <Col xs={10}>
                  <H5>
                    You talked, and we listened. After our extensive user
                    research, we came up with a two part system to help remove
                    the frustration and difficulty from online shopping.
                  </H5>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: 50 }}>
          <Col sm={4} xs={12} smOffset={1}>
            <H2 align="left">Meet Tailor</H2>
            <H6>Great things come in small packages.</H6>
            <P>
              Meet our hardware! Ain't she a beaut? Aptly and affectionately
              called Tailor, our smart device can take your measurements
              accurately (up to an 1/8th of an centimeter)! The device will then
              send your measurements to our chrome extension via bluetooth and
              filter the clothing options by fit for you!
            </P>
            <Button width="120px">Pre-order</Button>
          </Col>
          <Col sm={5} xs={12} smOffset={1}>
            <Image
              width="100%"
              height={450}
              src="http://placebear.com/500/500"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: 50 }}>
          <Col sm={5} xs={12} smOffset={1}>
            <Image
              width="100%"
              height={450}
              src="http://placebear.com/500/500"
            />
          </Col>
          <Col sm={4} xs={12} smOffset={1}>
            <H2 align="left">Pattern Play</H2>
            <H6>A pattern for every person.</H6>
            <P>
              We’ve all had a terrible onilne shopping experience, and after
              talking to you, we found some common threads. To help shape our
              brand, we created a four personalities with correspoinding
              pattens: Boost, Maca, Scribble, and Confetti. Each one has seen
              some sh*t, and most people find one they relate to. Ready to find
              yours?s
            </P>
            <Button width="120px">Get Started</Button>
          </Col>
        </Row>
        <Row style={{ marginTop: 50 }} center="xs">
          <Col xs={12}>
            <H4>
              We’ve partnered with the following brands for the official launch
              of our chrome extension
            </H4>
          </Col>
          <Row center="xs" around="xs">
            <Col sm={3}>
              <Image
                width="100%"
                height={60}
                src="http://placebear.com/200/70"
              />
            </Col>
            <Col sm={3}>
              <Image
                width="100%"
                height={60}
                src="http://placebear.com/200/70"
              />
            </Col>
            <Col sm={3}>
              <Image
                width="100%"
                height={60}
                src="http://placebear.com/200/70"
              />
            </Col>
            <Col sm={3}>
              <Image
                width="100%"
                height={60}
                src="http://placebear.com/200/70"
              />
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}
