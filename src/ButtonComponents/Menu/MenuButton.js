import React, { Component } from 'react';
import { View, Text,StyleSheet,Icon } from 'react-native';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      console.warn(this.props.navigation)
      console.warn(this.props.screenProps)
    return(
        <View style={{justifyContent:'center',paddingLeft:16,paddingTop:16}}>
        <Icon name="align-right" size={30} color="#fff" onPress={() => this.props.screenProps.toggleDrawer()} />
        </View>
    );
  }
}


//  const MenuButton = () => {
     
//  }

export default withNavigation(MenuButton);


