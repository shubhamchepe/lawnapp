import React, { Component } from 'react';
import { View, 
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Animated,
  Easing,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Picker } from 'react-native';
//import ForgotPassBtn from '../../ButtonComponents/ForgotPassBtn';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/functions';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
const apiBaseUrl = "https://api.99lawns.com/api/"
import { withNavigation } from 'react-navigation';


class ForgotPassScreenComp extends Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY({x:0,y:100});
    this.state = {
      opacity: new Animated.Value(0),
      username:'',
      language:'',
      loginStatus:'',
      statusColor:''
    };
  }


  componentDidMount(){
    this.myAnimation()
    this.onload()
   }
 
 
   onload = () => {
       Animated.timing(this.state.opacity, {
           toValue:1,
           duration:1000,
           useNativeDriver: true
       }).start();
   }
 
   myAnimation(){
       this.position.setValue({x:0,y:130});
       Animated.spring(this.position, {
         toValue: {x:0,y:80},
         duration: 6000,
         delay:1000,
         stiffness:50,
         easing:Easing.bounce()
     }).start()
   }
 
   SignInUser = async () => {

    var payload = {
        "userid": this.state.username
    }
    try{
     const response = await axios.post(apiBaseUrl + '/forgetpwd', payload)
     console.log(response)
     if(response.data.code == 200){
        this.setState({
            loginStatus:'Success',
            statusColor:'green'
            //navigate to some user screen
        })
        this.props.navigation.navigate('Resetpass')
     } else{
         this.setState({
             loginStatus:'Something Went Wrong!',
             statusColor:'red'
         })
     }
    } catch(error){
        console.log(error);
    }
    
  }

  render() {
    return (
      <ScrollView>
       <View style={styles.container}>
        <StatusBar 
   backgroundColor="#3f9d45"
   barStyle="light-content"
  />
  <Animated.View style={[this.position.getLayout(),styles.container]}>
  <Animated.Image 
  onload={this.onload}
   style={{width:widthPercentageToDP('25%'),height:heightPercentageToDP('25%'),opacity:this.state.opacity}}
   source= {require('../../../assets/icons/logo/icon.png')}
  />
  <Text style={styles.textStyle}>Forgot Password Screen</Text>
  </Animated.View>
  <View style={styles.InputContainer}>
  <Text style={{color:'green',fontSize:RFValue(15)}}>{this.state.loginStatus}</Text>
  <TextInput 
      style={[styles.LoginUserInput,{color:'#000'}]}
      placeholder={'Enter your email'}
      placeholderTextColor={'#6e6e6e'}
      underlineColorAndroid='transparent'
      clearButtonMode = 'always'
      returnKeyType='next'
      onChangeText={username => this.setState({username})}
      autoCorrect={false}
                 />
  <TouchableOpacity onPress={() => {this.SignInUser()}} style={{backgroundColor:'#3f9d45',
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
  </View>
  </View>
  </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  textStyle:{
      color:'#3f9d45',
      fontWeight:'700',
      fontSize:RFValue(25)
  },
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
      },
  InputContainer:{
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginTop:heightPercentageToDP('16%')
  },
  LoginUserInput:{
    height:heightPercentageToDP('7%'),
    width:widthPercentageToDP('85%'),
      borderRadius:8,
      backgroundColor:'#E7E7E7',
      fontSize:RFValue(16),
      paddingLeft:30,
      color:'#ffffff',
      margin: 10
    },
    LoginBtnTxt:{
        fontSize:RFValue(20),
        fontWeight:"700",
        color:'#fff'
    },
    LoginBtn:{
        backgroundColor:'#3f9d45',
        height:heightPercentageToDP('7%'),
        width:widthPercentageToDP('75%'),
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        margin: 10,
    }
});

export default withNavigation(ForgotPassScreenComp);
