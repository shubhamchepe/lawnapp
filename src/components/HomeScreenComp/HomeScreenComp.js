import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../Reusables/Header';
import { withNavigation } from 'react-navigation';

class HomeScreenComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Home'
    };
  }

  render() {
    return (
      
      <View style={styles.container}>
        <Header headerTitle={this.state.title}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default withNavigation(HomeScreenComp);
