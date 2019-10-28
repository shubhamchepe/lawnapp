import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PostScreenComp from '../../components/PostScreenComp/PostScreenComp';

class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <PostScreenComp/>
    );
  }
}

export default PostScreen;
