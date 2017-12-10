import React from 'react';
import { Button, Lockup, Link as StyledLink } from 'style';
import { black, white, screenWidth } from 'style/constants';
import Link from 'next/link';
import styled from 'styled-components';

const NavBackground = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  height: 60px;
  background-color: ${black};
  z-index: 999;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: ${screenWidth};
  margin: 0 auto;
  align-items: center;
  height: 60px;

  @media (max-width: ${screenWidth}) {
    margin: 0 15px;
  }
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  a,
  button {
    margin-left: 20px;
  }
`;

export default class Nav extends React.Component {
  render() {
    return (
      <NavBackground>
        <NavWrapper>
          <Link href="/" passHref prefetch>
            <a>
              <Lockup light />
            </a>
          </Link>
          <RightNav>
            <Link href="/about" passHref prefetch>
              <StyledLink color={white}>About</StyledLink>
            </Link>
            <Button primary>Get Started</Button>
          </RightNav>
        </NavWrapper>
      </NavBackground>
    );
  }
}
