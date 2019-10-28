import React, { Component } from 'react';
import { View, Text } from 'react-native';
import VendorScreenComp from '../../components/VendorScreenComp/VendorScreenComp';

class VendorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <VendorScreenComp/>
    );
  }
}

export default VendorScreen;
