import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import AppContainer from './src/AppContainer/AppContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 

  render() {
    return (
     
        <AppContainer/>
     
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default App;