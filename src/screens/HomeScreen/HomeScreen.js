import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomeScreenComp from '../../components/HomeScreenComp/HomeScreenComp';
import BottomTabNav from '../../BottomTabNav/BottomTabNav';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <HomeScreenComp/>
    );
  }
}

export default HomeScreen;
