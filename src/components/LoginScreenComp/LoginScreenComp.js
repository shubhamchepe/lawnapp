import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,StatusBar,Animated,Easing,TextInput,TouchableOpacity,KeyboardAvoidingView,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RegisterButton from '../../ButtonComponents/RegisterButton'
import ForgotPassBtn from '../../ButtonComponents/LoginScreen/ForgotPassBtn';
import axios from 'axios';
const apiBaseUrl = "api.stage.99lawns.com/"

class LoginScreenComp extends Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY({x:0,y:10});
    this.state = {
        opacity: new Animated.Value(0),
        username:'',
        password:''
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
      this.position.setValue({x:0,y:150});
      Animated.spring(this.position, {
        toValue: {x:0,y:100},
        duration: 6000,
        delay:1000,
        stiffness:50,
        easing:Easing.bounce()
    }).start()
  }

  SignInUser = async () => {

   var payload = {
       "userid": this.state.username,
       "password": this.state.password 
   }
   try{
    response = await axios.post(apiBaseUrl + 'login', payload).then((response) => response.json())
    console.log(response);
   } catch(error){
       console.log(error);
   }
   
 }


  render() {
    return (
        
       
  <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
      <ScrollView style={{flex:1}}>
       <View style={styles.container}>
        <StatusBar 
   backgroundColor="#3f9d45"
   barStyle="light-content"
  />
  <Animated.View style={[this.position.getLayout(),styles.container]}>
  <Animated.Image 
  onload={this.onload}
   style={{width:200,height:200,opacity:this.state.opacity}}
   source= {require('../../../assets/icons/logo/icon.png')}
  />
  <Text style={styles.textStyle}>Login Screen</Text>
  </Animated.View>
  <View style={styles.InputContainer}>
  <TextInput 
      style={[styles.LoginUserInput,{color:'#000'}]}
      placeholder={'username'}
      placeholderTextColor={'#6e6e6e'}
      underlineColorAndroid='transparent'
      clearButtonMode = 'always'
      returnKeyType='next'
      onChangeText={username => this.setState({username})}
      autoCorrect={false}
                 />
 <TextInput 
      style={[styles.LoginUserInput1,{color:'#000'}]}
      placeholder={'password'}
      placeholderTextColor={'#6e6e6e'}
      underlineColorAndroid='transparent'
      clearButtonMode = 'always'
      returnKeyType='next'
      onChangeText={password => this.setState({password})}
      autoCorrect={false}
                 />
    <TouchableOpacity style={styles.LoginBtn} onPress={() => this.SignInUser()}>
        <Text style={styles.LoginBtnTxt}>Login</Text>
    </TouchableOpacity>
    <View style={{flexDirection:'row',margin: 15,}}>
        <Text style={{color:'#696969',fontWeight:'700',fontSize:15}}>
            Don't have an account? 
        </Text>
        <RegisterButton/>
    </View>
    <TouchableOpacity style={styles.LoginWidFB}>
        <Text style={styles.LoginWidFBBtnTxt}>login with facebook</Text>
        <Icon name="facebook-square" size={30} color="#fff" />
    </TouchableOpacity>
   <ForgotPassBtn/>
  </View>
  </View>
  </ScrollView>
  </KeyboardAvoidingView>

    );
  }
}


const styles = StyleSheet.create({
    textStyle:{
        color:'#3f9d45',
        fontWeight:'700',
        fontSize:25
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
        marginTop:160
    },
    LoginUserInput:{
        height:50,
        width:340,
        borderRadius:8,
        backgroundColor:'#E7E7E7',
        fontSize:16,
        paddingLeft:30,
        color:'#ffffff',
        margin: 10
      },
      LoginUserInput1:{
        height:50,
        width:340,
        borderRadius:8,
        backgroundColor:'#E7E7E7',
        fontSize:16,
        paddingLeft:30,
        color:'#ffffff'
      },
      LoginBtnTxt:{
          fontSize:20,
          fontWeight:"700",
          color:'#fff'
      },
      LoginBtn:{
          backgroundColor:'#3f9d45',
          width:300,
          height:50,
          borderRadius:8,
          alignItems:'center',
          justifyContent:'center',
          margin: 10,
      },
      LoginWidFBBtnTxt:{
        fontSize:20,
        fontWeight:"700",
        color:'#fff'
    },
      LoginWidFB:{
        flexDirection:'row',
        backgroundColor:'#3b5998',
        width:300,
        height:50,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:40,
        paddingRight:40,
        margin: 10,
    }
});

export default LoginScreenComp;
