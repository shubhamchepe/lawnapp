import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '../utils/functions';
import { DrawerActions } from 'react-navigation-drawer';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
//  import MenuButton from "../ButtonComponents/Menu/MenuButton";

//  class MenuButton extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View style={{justifyContent:'center',paddingLeft:16,paddingTop:16}}>
//     <Icon name="align-right" size={30} color="#fff" onPress={() => this.props.navigation.toggleDrawer()} />
//     </View>
//     );
//   }
// }

  // withNavigation(MenuButton);



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }  

  // OnScreenChange = () => {
  //   if(this.props.headerTitle == "Buyer"){
  //     this.props.navigation.openDrawer()
  //   } else {
  //     this.props.navigation.toggleDrawer()
  //   }
  // }

  render() {      
    return (
        <View style={styles.Header}>
          <View style={styles.Left}>
            <View style={{justifyContent:'center',paddingLeft:16,paddingTop:16}}>
        <Icon name="align-right" size={30} color="#fff" onPress={() => this.props.navigation.openDrawer()} />
        </View>
        {/* <MenuButton screenProps={this.props.screenProps}/> */}
          </View>
          <View style={styles.ScreenNameCont}>
              <Text style={styles.TextStyle}>
                  {this.props.headerTitle}
              </Text>
          </View>
          <View style={styles.Right}>
          <View style={{justifyContent:'center',paddingRight:16,paddingTop:16}}>
              <Icon name="filter" size={30} color="#fff" />
              </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    Header:{
      backgroundColor:'#3f9d45',
      height:heightPercentageToDP('8%'),
      flexDirection:'row',
      justifyContent:'space-between'
    },
    Left:{
      width:widthPercentageToDP('16%'),
      height:heightPercentageToDP('8%'),
      backgroundColor:'#3f9d45',//Change color to debug
      alignItems:"flex-start"
    },
    Right:{
      width:widthPercentageToDP('16%'),
      height:heightPercentageToDP('8%'),
      backgroundColor:'#3f9d45',//Change color to debug
      alignItems:'flex-end' 
    },
    ScreenNameCont:{
        alignItems:'center',
        justifyContent:'center'
    },
    TextStyle:{
        fontSize:RFValue(20),
        fontWeight:'700',
        color:'#fff'
    }
  });

export default withNavigation(Header);
