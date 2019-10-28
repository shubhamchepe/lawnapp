import React, { Component } from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import ForgotPassScreen from '../screens/ForgotPassScreen/ForgotPassScreen';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import TabNavigator from '../BottomTabNav/BottomTabNav';
import MyDrawerNavigator from '../DrawerNav/DrawerNav';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { withNavigation } from 'react-navigation';



const AppContainer = createSwitchNavigator({
    Splashscreen: {
      screen: WelcomeScreen,
      navigationOptions: {
        header:null
      }
    },
    Loginscreen: {
      screen: LoginScreen,
      navigationOptions: {
        header:null
      }
    },
    Registerscreen: {
        screen: RegisterScreen,
        navigationOptions: {
          header:null
        }
      },
      Frogotscreen: {
        screen: ForgotPassScreen,
        navigationOptions: {
          header:null
        }
      },
      Resetpass: {
        screen: ResetPassword,
        navigationOptions: {
          header:null
        }
      },
      Bottomtabnav: {
        screen: TabNavigator,
        navigationOptions: {
          header:null
        }
      },
      Homescreen: {
        screen: MyDrawerNavigator,
        navigationOptions: {
          header:null
        }
      },
  },{initialRouteName:'Splashscreen'});
  
  export default createAppContainer(AppContainer);