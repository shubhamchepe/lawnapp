import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WelcomeScreenComp from '../../components/WelcomeScreenComp/WelcomeScreenComp';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'splash'
    };
  }

  componentDidMount(){
    setTimeout(() => {this.props.navigation.navigate('Loginscreen')}, 3000);
  }

  render() {
    return (
      <WelcomeScreenComp/>
    );
  }
}

export default WelcomeScreen;
