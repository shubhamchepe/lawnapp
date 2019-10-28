import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Header from '../../Reusables/Header';


class VendorScreenComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'Vendor'
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

export default VendorScreenComp;
