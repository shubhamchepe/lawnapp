import React, { Component } from 'react';
import { View, Text,Image,Button ,StatusBar,StyleSheet,ActivityIndicator} from 'react-native';
import ButtonComp from '../../ButtonComponents/Button'

class WelcomeScreenComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Loading: true
    };
  }

  render() {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <StatusBar 
         backgroundColor="#3f9d45"
         barStyle="light-content"
        />
        <Image 
         style={{width:200,height:200}}
         source= {require('../../../assets/icons/logo/icon.png')}
        />
        <View>
        <Text style={styles.textStyle}>99lawns</Text>
        </View>
        <ActivityIndicator size="small" color="#00ff00" />
    </View>
    );
  }
}

const styles = StyleSheet.create({
    textStyle:{
        color:'#3f9d45',
        fontWeight:'700',
        fontSize:25
    }
});

export default WelcomeScreenComp;
