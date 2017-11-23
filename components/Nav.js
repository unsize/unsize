import React from 'react';
import { Button, Lockup, Link as StyledLink } from 'style';
import { Row, Col } from 'react-flexbox-grid';
import { black, white } from 'style/constants';
import Link from 'next/link';
import styled from 'styled-components';

const NavBackground = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  height: 75px;
  background-color: ${black};
  z-index: 999;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  align-items: center;
  height: 75px;
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
          <Lockup light />
          <RightNav>
            <Link href="/about">
              <StyledLink color={white}>About</StyledLink>
            </Link>
            <StyledLink color={white}>Why Unsize?</StyledLink>
            <Button primary>Get Started</Button>
          </RightNav>
        </NavWrapper>
      </NavBackground>
    );
  }
}
