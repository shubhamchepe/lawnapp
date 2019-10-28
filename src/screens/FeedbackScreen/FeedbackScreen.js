import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FeedBackComp from '../../components/FeedBackComp/FeedBackComp'

class FeedbackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <FeedBackComp/>
    );
  }
}

export default FeedbackScreen;
