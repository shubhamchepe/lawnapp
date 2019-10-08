import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RegisterScreenComp from '../../components/RegisterScreenComp/RegisterScreenComp';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <RegisterScreenComp/>
      </View>
    );
  }
}

export default RegisterScreen;
