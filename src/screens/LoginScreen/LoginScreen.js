import React, { Component } from 'react';
import { View, Text ,BackHandler} from 'react-native';
import LoginScreenComp from '../../components/LoginScreenComp/LoginScreenComp'

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <LoginScreenComp navigation={this.props.navigation}/>
    );
  }
}

export default LoginScreen;
