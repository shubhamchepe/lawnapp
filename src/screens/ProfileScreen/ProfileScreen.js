import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ProfileScreenComp from '../../components/ProfileScreenComp/ProfileScreenComp';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ProfileScreenComp/>
    );
  }
}

export default ProfileScreen;
