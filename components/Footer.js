import React from 'react';
import { Image, P} from 'style';
import styled from 'styled-components';
import { teal, green, black, white, workSansFont, screenWidth } from 'style/constants';

const FooterBackground = styled.div`
  width: 100%;
  margin: 20px 0 0 0;
  height: min-content;
  background-color: ${green};
  background-image: url("/static/images/lightning_scribble.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80% auto;
  padding: 60px 0 30px 0;
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
    padding: 25px 25px 25px 25px;
  }
`;

const ContactWrapper = styled.div`
  padding: 0px;
  align-items: right;
`;

const Logo = Image.extend`
  height: 40px;
  width: auto;
  margin-right: 15px;
`;

const ContactInfo = styled.div`
  color: ${black};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  align-items: right;
  font-family: ${workSansFont};
  a {
    color: ${black};
    align-items: right;
  }
`;

const SocialIcon = Image.extend`
  height: 30px;
  margin: 25px 15px 25px 0px;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
   a {
    color: ${black};
  }
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
  align-items: right;
  a {
    height: 60px;
  }
`;

const Divider = styled.div`
  width: 100%;
  border-style: hidden hidden solid hidden;
  border-width: 1px;
  border-color: #4ba392;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <FooterBackground>
        <FooterWrapper>
          <LeftWrapper>
            <Logo src="/static/images/lockup.png" />
          </LeftWrapper>
        </FooterWrapper>
        <FooterWrapper>
        <LeftWrapper>
            <a href="https://medium.com/unsize" target="_blank">
              <SocialIcon src="/static/images/medium.svg" />
            </a>
            <a href="https://twitter.com/unsize_me" target="_blank">
              <SocialIcon src="/static/images/twitter.svg" />
            </a>
            <a href="https://instagram.com/unsize.me" target="_blank">
              <SocialIcon src="/static/images/instagram.svg" />
            </a>
        </LeftWrapper>
        <RightWrapper>
        </RightWrapper>
        <ContactWrapper>
              <ContactInfo>
                 Work with us: <a href="mailto:katie@unsize.me?Subject=Hello!">
                  katie@unsize.me</a> Boston, MA
              </ContactInfo>
            </ContactWrapper>
        </FooterWrapper>
        <FooterWrapper>
          <Divider>
          </Divider>
        </FooterWrapper>
        <FooterWrapper>
        <P> </P>
        </FooterWrapper>
        <FooterWrapper>
          <LeftWrapper>
            <P small black noMargin>
              Made with 💛by{' '}
              <a href="https://neu.edu/scout" target="_blank">
                Scout
              </a>
            </P>
          </LeftWrapper>
          <RightWrapper>
            <P small black noMargin>
             © 2018 Unsize 
            </P>
          </RightWrapper>
        </FooterWrapper>
      </FooterBackground>
    );
  }
}
