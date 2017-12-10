import React from 'react';
import { Image, P } from 'style';
import styled from 'styled-components';
import { black, white, workSansFont, screenWidth } from 'style/constants';
import { Col, Row } from '/Users/Jon/Desktop/unsize/components/grid';

const FooterBackground = styled.footer`
  width: 100%;
  bottom: 0;
  left: 0;
  margin: 0;
  height: min-content;
  background-color: ${black};
  padding: 10px 0;
`;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  max-width: ${screenWidth};
  margin: 0 auto;
  align-items: center;
  height: min-content;

  @media (max-width: 767px) {
    justify-content: space-around;
    padding: 0 15px;
  }
`;

const ContactWrapper = styled.div`
  background-color: ${black};
  padding: 5px;
`;

const Logo = Image.extend`
  width: 60px;
  height: 60px;
  margin-right: 15px;
`;

const ContactInfo = styled.div`
  color: ${white};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  font-family: ${workSansFont};
`;

const SocialIcon = Image.extend`
  height: 30px;
  margin: 15px;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const MiddleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <FooterBackground>
        <FooterWrapper>
          <LeftWrapper>
            <Logo src="/static/images/favicon_white.png" />
            <ContactWrapper>
              <ContactInfo>
                <div>(123) 555-6789</div>
                <div>hello@unsize.me</div>
              </ContactInfo>
            </ContactWrapper>
          </LeftWrapper>
          <MiddleWrapper>
            <P small white noMargin>
              Made with 💛 at Scout
            </P>
          </MiddleWrapper>
          <RightWrapper>
            <a href="https://medium.com/unsize" target="_blank">
              <SocialIcon src="/static/images/medium.svg" />
            </a>
            <a href="https://twitter.com/unsize_me" target="_blank">
              <SocialIcon src="/static/images/twitter.png" />
            </a>
            <a href="https://instagram.com/unsize.me" target="_blank">
              <SocialIcon src="/static/images/instagram.png" />
            </a>
          </RightWrapper>
        </FooterWrapper>
      </FooterBackground>
    );
  }
}
