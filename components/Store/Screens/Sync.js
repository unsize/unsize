import React from 'react';
import styled from 'styled-components';
import { Button, H1, Image, Link, P } from 'style';
import { elemSpacingXs, elemSpacingSm, elemSpacingMd } from 'style/constants';

const SyncContainer = styled.div`
  text-align: center;
  img {
    margin: ${elemSpacingMd} 0 ${elemSpacingSm};
  }
  a {
    margin-bottom: ${elemSpacingSm};
  }
  button {
    display: block;
  }
`;

export default class Sync extends React.Component {
  syncTaylor() {
    navigator.bluetooth
      .requestDevice({
        filters: [
          {
            services: ['0000180f-0000-1000-8000-00805f9b34fb']
          }
        ]
      })
      .then(device => {
        console.log(device, 'device');
        return device.gatt.connect();
      })
      .then(server => {
        console.log(server, 'server');
        // Getting Battery Service...
        return server.getPrimaryService('battery_service');
      })
      .then(service => {
        console.log(service, 'service');
        // Getting Battery Level Characteristic...
        return service.getCharacteristic(
          '00002a19-0000-1000-8000-00805f9b34fb'
        );
      })
      .then(characteristic => {
        // Reading Battery Level...
        return characteristic.readValue();
      })
      .then(value => {
        const measurements = { chest: value.getUint8(0) };
        console.log(value);
        this.props.setMeasurements(measurements);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const headerText = this.props.measurements
      ? 'Update your fit'
      : 'Time for the fun part!';
    return (
      <SyncContainer>
        <H1 align="center">{headerText}</H1>
        <P>Sync your measurements with Tailor to begin</P>
        <Image
          src="/static/images/illustrations/sync_line.png"
          height="125px"
        />
        <Button primary onClick={this.syncTaylor.bind(this)}>
          Sync with Tailor
        </Button>
        <P small>Ahead of the game?</P>
        <Link small onClick={() => this.props.setScreen(4)}>
          Enter your measurements here
        </Link>
      </SyncContainer>
    );
  }
}
