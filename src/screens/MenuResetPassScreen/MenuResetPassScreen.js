import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MenuResetPassComp from '../../components/MenuResetPassComp/MenuResetPassComp';

class MenuResetPassScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MenuResetPassComp/>
    );
  }
}

export default MenuResetPassScreen;
