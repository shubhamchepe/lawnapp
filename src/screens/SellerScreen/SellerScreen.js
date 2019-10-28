import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SellerScreenComp from '../../components/SellerScreenComp/SellerScreenComp';

class SellerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SellerScreenComp/>
    );
  }
}

export default SellerScreen;
