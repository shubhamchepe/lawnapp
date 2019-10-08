import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ForgotPassScreenComp from '../../components/ForgotPassScreenComponent/ForgotPassScreenComp';

class ForgotPassScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ForgotPassScreenComp/>
    );
  }
}

export default ForgotPassScreen;
