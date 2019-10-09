import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ResetPasswordComp from '../../components/ResetPasswordComp/ResetPasswordComp';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <ResetPasswordComp/>
    );
  }
}

export default ResetPassword;
