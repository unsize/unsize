import React from 'react';
import styled, { keyframes } from 'styled-components';
import MailChimp from '../MailChimp';
import RowWrapper from '../RowWrapper';
import TwoColumnImageRow from '../TwoColumnImageRow';
import Welcome from './Screens/Welcome';
import NameEntry from './Screens/NameEntry';
import Sync from './Screens/Sync';
import ManualEntry from './Screens/ManualEntry';

import 'style/fontFaces';
import 'style/fontSizes';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeInOverlay = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: .9;
  }
`;

const fadeOut = keyframes`
  from {
    opacity:1;
  }

  to {
    opacity:0;
  }
`;

const PopoverContainer = styled.div`
  animation: ${fadeIn} .5s forwards;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 35px;
  top: 25%;
  margin: 0 auto;
  left: 0;
  right: 0;
  min-height: 400px;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
  width: 48%;
  will-change: opacity;
  z-index: 2;
    & h1 {
      font-size: 42px;
    }
  }
`;

const Overlay = styled.div`
  animation: ${fadeInOverlay} 0.5s forwards;
  width: 100%;
  position: absolute;
  height: 100%;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  z-index: 1;
  will-change: opacity;
  display: ${props => (props.show ? `block` : `null`)};
`;

export default class StorePopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      screen: 1
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  togglePopup() {
    const { open } = this.state;
    console.log('here');
    this.setState({ open: !open });
  }

  setScreen(num) {
    this.setState({ screen: num });
  }

  setMeasurements(measurements) {
    this.props.setMeasurements(measurements);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    const { open } = this.state;
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && open) {
      this.togglePopup();
    }
  }

  render() {
    const { open, screen } = this.state;
    const { setMeasures } = this.props;
    const popoverScreens = {
      1: <Welcome setScreen={this.setScreen.bind(this)} />,
      2: <NameEntry setScreen={this.setScreen.bind(this)} />,
      3: (
        <Sync
          setScreen={this.setScreen.bind(this)}
          setMeasurements={this.setMeasurements.bind(this)}
        />
      ),
      4: (
        <ManualEntry
          setScreen={this.setScreen.bind(this)}
          togglePopup={this.togglePopup.bind(this)}
          setMeasurements={this.setMeasurements.bind(this)}
        />
      )
    };
    return (
      <div>
        <Overlay show={open} />
        <RowWrapper>
          <TwoColumnImageRow
            title="Shop Unsize! Find your fit."
            body={`Grab some Unsize style for your closest while trying out our chrome extension.`}
            onClick={this.togglePopup.bind(this)}
            height="100px"
            tabletHeight="100px"
            mobileHeight="100px"
            ctaText="Get Started"
          />
          <h1>dd</h1>
          {open && (
            <div ref={this.setWrapperRef.bind(this)}>
              <PopoverContainer>{popoverScreens[screen]}</PopoverContainer>
            </div>
          )}
        </RowWrapper>
      </div>
    );
  }
}
