import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BuyerScreenComp from '../../components/BuyerScreenComp/BuyerScreenComp';

class BuyerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <BuyerScreenComp/>
    );
  }
}

export default BuyerScreen;
