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
        
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Frogotscreen')}}>
        <Text style={{color:'#7BD05F',fontWeight:'700',fontSize:15,margin: 10,}}>Forgot Password</Text>
    </TouchableOpacity>
        
    );
  }
}

export default withNavigation(ForgotPassBtn);
