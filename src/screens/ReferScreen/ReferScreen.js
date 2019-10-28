import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ReferScreenComp from '../../components/ReferScreenComp/ReferScreenComp';

class ReferScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ReferScreenComp/>
    );
  }
}

export default ReferScreen;
