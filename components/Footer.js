import React from 'react';
import { Image } from 'style';
import styled from 'styled-components';
import { black, white, workSansFont } from 'style/constants';

const footerHeight = '100px';

const FooterWrapper = styled.footer`
  height: ${footerHeight};
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 0;
`;

const Scribble = Image.extend`
  position: absolute;
  top: 0;
  left: 0;
`;

const ContactWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 55%;
  height: ${footerHeight};
  background-color: ${black};
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

const Logo = Image.extend`
  width: 75px;
  height: 75px;
  margin: 30px;
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

export default class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <Scribble src="/static/images/footer_scribble.png" />
        <ContactWrapper>
          <Logo src="/static/images/favicon_white.png" />
          <ContactInfo>
            <div>(123) 555-6789</div>
            <div>shuya@unsize.me</div>
          </ContactInfo>
          <SocialIcon src="/static/images/facebook.png" />
          <SocialIcon src="/static/images/twitter.png" />
          <SocialIcon src="/static/images/instagram.png" />
        </ContactWrapper>
      </FooterWrapper>
    );
  }
}
