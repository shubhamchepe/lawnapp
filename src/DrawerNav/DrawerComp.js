import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '../utils/functions';

class DrawerComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  navLink(nav, text) {
    return(
        <TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    )
}
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.topLinks}>
              <Image
              style={{width:widthPercentageToDP('24%'),height:heightPercentageToDP('13%'),backgroundColor:'#fff',borderRadius:80}}
              source={require('../../assets/icons/logo/icon.png')}
              />
          <Text style={{color:"#fff"}}> DrawerComp </Text>
          </View>
          <View style={styles.bottomLinks}>
             {this.navLink('Homescreen', 'Home')}
             {this.navLink('Profilescreen', 'Profile')}
             {this.navLink('Referscreen', 'Refer')}
             {this.navLink('Feedbackscreen', 'Feedback')}
             {this.navLink('Postscreen', 'Post')}
             {this.navLink('Bookmarkscreen', 'Bookmark')}
             {this.navLink('Menuresetpassword', 'Reset Password')}
             {this.navLink('', 'Logout')}
             {this.navLink('Buyerscreen', '')}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#DEFFD3'
    },
    link: {
		flex: 1,
		fontSize: 20,
		padding: 6,
		paddingLeft: 14,
		margin: 5,
		textAlign: 'left',
    },
    topLinks:{
		height: heightPercentageToDP('20%'),
        backgroundColor: '#3f9d45',
        alignItems:'center',
        justifyContent:'center'
	},
	bottomLinks: {
		flex: 1,
		backgroundColor: '#EEFFE8',
		paddingTop: 10,
	}
  });

export default DrawerComp;
