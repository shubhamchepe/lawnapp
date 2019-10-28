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
import axios from 'axios';
import GoToLoginButton from '../../ButtonComponents/GoToLoginButton';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/functions';
import { RFValue } from 'react-native-responsive-fontsize';
const apiBaseUrl = "https://api.99lawns.com/api/";

class RegisterScreenComp extends Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY({x:0,y:80});
    this.state = {
      opacity: new Animated.Value(0),
      username:'',
      password:'',
      language:'',
      check1:false,
      user_type1:'',
      check2:false,
      user_type2:'',
      check3:false,
      user_type3:'',
      user_type:'',
      regStatus:'',
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
       this.position.setValue({x:0,y:60});
       Animated.spring(this.position, {
         toValue: {x:0,y:50},
         duration: 6000,
         delay:1000,
         stiffness:50,
         easing:Easing.bounce()
     }).start()
   }
 
   SignInUser = async () => {
      await this.EvalUserType()
    var payload = {
        "userid": this.state.username,
        "password": this.state.password,
        "user_type": this.state.user_type 
    }
    try{
     const response = await axios.post(apiBaseUrl + '/register', payload)
     console.log(response)
     if(response.data.code == 200){
        this.setState({
            regStatus:'Success',
            statusColor:'green'
            //navigate to some user screen
        })
     } else{
         this.setState({
             regStatus:'Something Went Wrong!',
             statusColor:'red'
         })
     }
    } catch(error){
        console.log(error);
    }
    
  }

  EvalUserType = () =>{
      let UserType = [this.state.user_type1,this.state.user_type2,this.state.user_type3]
      let something = UserType.join('')
      this.setState({
        user_type: something
      })
    
  }

  check1 = () => {
    if(this.state.check1 == false){
      this.setState({
        check1:true,
        user_type1:'B'
      })
    }else{
      if(this.state.check1 == true){
        this.setState({
          check1:false,
          user_type1:''
        })
      }
    }
  }

  check2 = () => {
    if(this.state.check2 == false){
      this.setState({
        check2:true,
        user_type2:'S'
      })
    }else{
      if(this.state.check2 == true){
        this.setState({
          check2:false,
          user_type2:''
        })
      }
    }
  }

  check3 = () => {
    if(this.state.check3 == false){
      this.setState({
        check3:true,
        user_type3:'V'
      })
    }else{
      if(this.state.check3 == true){
        this.setState({
          check3:false,
          user_type3:''
        })
      }
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
  <Text style={styles.textStyle}>Register Screen</Text>
  </Animated.View>
  <View style={styles.InputContainer}>
  <Text style={{color:'green',fontSize:RFValue(15)}}>{this.state.regStatus}</Text>
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
                 <CheckBox
  title='I need a lawn services'
  checked={this.state.check1}
  checkedIcon='check-square-o'
  onPress={() => this.check1()}
/>
<CheckBox
  title='I am lawn services provider'
  checked={this.state.check2}
  checkedIcon='check-square-o'
  onPress={() => this.check2()}
/>
<CheckBox
  title='I sell lawn related products'
  checked={this.state.check3}
  checkedIcon='check-square-o'
  onPress={() => this.check3()}
/>

                 {/* <Picker
                 mode='dropdown'
  selectedValue={this.state.language}
  style={{height: 50, width: 340,backgroundColor:'#E7E7E7',margin: 10,borderRadius:8}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="I need a lawn services" value="I need a lawn services" />
  <Picker.Item label="I am lawn services" value="I am lawn services" />
  <Picker.Item label="I sell lawn related products" value="I sell lawn related products" />
</Picker> */}
    <TouchableOpacity style={styles.LoginBtn} onPress={() => this.SignInUser()}>
        <Text style={styles.LoginBtnTxt}>Register</Text>
    </TouchableOpacity>
  <GoToLoginButton/>
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
      marginTop:heightPercentageToDP('11%')
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
    LoginUserInput1:{
      height:heightPercentageToDP('7%'),
      width:widthPercentageToDP('85%'),
      borderRadius:8,
      backgroundColor:'#E7E7E7',
      fontSize:RFValue(16),
      paddingLeft:30,
      color:'#ffffff'
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
    },
    LoginWidFBBtnTxt:{
      fontSize:RFValue(20),
      fontWeight:"700",
      color:'#fff'
  },
    LoginWidFB:{
      flexDirection:'row',
      backgroundColor:'#3b5998',
      height:heightPercentageToDP('7%'),
      width:widthPercentageToDP('75%'),
      borderRadius:8,
      alignItems:'center',
      justifyContent:'space-between',
      paddingLeft:40,
      paddingRight:40,
      margin: 10,
  }
});

export default RegisterScreenComp;
