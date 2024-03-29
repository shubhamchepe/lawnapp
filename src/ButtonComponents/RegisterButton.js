import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {RFValue} from 'react-native-responsive-fontsize';



class RegisterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Registerscreen')}}>
        <Text style={{color:'#7BD05F',fontWeight:'700',fontSize:RFValue(15),marginLeft: 5,}}>Register</Text>
    </TouchableOpacity>
    );
  }
}

export default withNavigation(RegisterButton);
