import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BookMarkComp from '../../components/BookMarkComp/BookMarkComp';

class BookmarkScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <BookMarkComp/>
    );
  }
}

export default BookmarkScreen;
