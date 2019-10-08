import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';

class GoToLoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flexDirection:'row',margin: 15,}}>
            <Text style={{color:'#000',fontWeight:'700',fontSize:15}}>
        Already have an account?
    </Text>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Loginscreen')}}>
        <Text style={{color:'#7BD05F',fontWeight:'700',fontSize:15,marginLeft: 5,}}>Login</Text>
    </TouchableOpacity>
        </View>
        
    );
  }
}

export default withNavigation(GoToLoginButton);
