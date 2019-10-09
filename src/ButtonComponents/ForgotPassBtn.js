import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';

class ForgotPassBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Resetpass')}} style={{backgroundColor:'#3f9d45',
        width:300,
        height:50,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        margin: 10}}>
        <Text style={{fontSize:20,
        fontWeight:"700",
        color:'#fff'}}>Send</Text>
    </TouchableOpacity>
        
    );
  }
}



export default withNavigation(ForgotPassBtn);
