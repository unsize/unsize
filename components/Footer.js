import React from 'react';
import { Image, P } from 'style';
import styled from 'styled-components';
import { black, white, workSansFont, screenWidth } from 'style/constants';

const FooterBackground = styled.div`
  width: 100%;
  margin: 20px 0 0 0;
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

  @media (max-width: ${screenWidth}) {
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
  color: #dadada;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  font-family: ${workSansFont};
  a {
    color: #dadada;
  }
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
  P {
    color: #dadada;
    a {
      color: #dadada;
    }
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  a {
    height: 60px;
  }
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
                <a href="mailto:katie@unsize.me?Subject=Hello!">
                  katie@unsize.me
                </a>
              </ContactInfo>
            </ContactWrapper>
          </LeftWrapper>
          <MiddleWrapper>
            <P small white noMargin>
              Made with 💛 by{' '}
              <a href="https://neu.edu/scout" target="_blank">
                Scout
              </a>
            </P>
            </MiddleWrapper>
          //   <MiddleWrapper>
          //   <P small white noMargin>
          //     Copyright 2018 unsize
          //     </P>
          // </MiddleWrapper>
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
