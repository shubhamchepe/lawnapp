import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ReferScreen from '../screens/ReferScreen/ReferScreen';
import FeedbackScreen from '../screens/FeedbackScreen/FeedbackScreen';
import PostScreen from '../screens/PostScreen/PostScreen';
import BookmarkScreen from '../screens/BookmarkScreen/BookmarkScreen';
import MenuResetPassword from '../screens/MenuResetPassScreen/MenuResetPassScreen';
import BuyerScreen from '../screens/BuyerScreen/BuyerScreen';

import DrawerComp from './DrawerComp';

const drawerConfig = {
  drawerBackgroundColor:'#DEFFD3',
  drawerPosition:'left',
  drawerType:'slide',
  keyboardDismissMode:'on-drag',
  contentComponent: ({navigation}) => {
    return(<DrawerComp navigation={navigation}/>)
  } 
}

const BuyerDrawerNavigator = createDrawerNavigator({
    Buyerscreen: {
        screen: BuyerScreen,
      },
    Profilescreen: {
      screen: ProfileScreen,
    },
    Referscreen: {
      screen: ReferScreen,
    },
    Feedbackscreen: {
      screen: FeedbackScreen,
    },
    Postscreen: {
      screen: PostScreen,
    },
    Bookmarkscreen: {
      screen: BookmarkScreen,
    },
    Menuresetpassword: {
      screen: MenuResetPassword,
    },
  },
  drawerConfig
  );

  export default createAppContainer(BuyerDrawerNavigator);