import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, withNavigation } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ReferScreen from '../screens/ReferScreen/ReferScreen';
import FeedbackScreen from '../screens/FeedbackScreen/FeedbackScreen';
import PostScreen from '../screens/PostScreen/PostScreen';
import BookmarkScreen from '../screens/BookmarkScreen/BookmarkScreen';
import MenuResetPassword from '../screens/MenuResetPassScreen/MenuResetPassScreen';
import BuyerScreen from '../screens/BuyerScreen/BuyerScreen';
import SellerScreen from '../screens/SellerScreen/SellerScreen';
import VendorScreen from '../screens/VendorScreen/VendorScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerComp from './DrawerComp';
import { createStackNavigator } from 'react-navigation-stack';


const drawerConfig = {
  drawerBackgroundColor:'#DEFFD3',
  drawerPosition:'left',
  drawerType:'slide',
  keyboardDismissMode:'on-drag',
  contentComponent: ({navigation}) => {
    return(<DrawerComp navigation={navigation}/>)
  } 
}

const TabNavigator = createBottomTabNavigator({
  Homescreen: {
    screen: HomeScreen,
    navigationOptions: {
      title:'Home'
    }
  },
  Buyerscreen: {
    screen: BuyerScreen,
    navigationOptions: {
      title:'Buyer'
    }
  },
  Sellerscreen: {
    screen: SellerScreen,
    navigationOptions: {
      title:'Seller'
    }
  },
  Vendorscreen: {
    screen: VendorScreen,
    navigationOptions: {
      title:'Vendor'
    }
  }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
     const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Homescreen') {
        iconName = `ios-home${focused ? '' : ''}`;
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
        //IconComponent = HomeIconWithBadge;
      } else if (routeName === 'Buyerscreen') {
        iconName = `ios-cart`;
      } else if (routeName === 'Sellerscreen'){
          iconName = `ios-barcode`;
      } else if (routeName === 'Vendorscreen'){
          iconName = `ios-business`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#3f9d45',
    inactiveTintColor: 'gray',
  },
}
);

const DashboardStackNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      header:null
    }
  }
});

const MyDrawerNavigator = createDrawerNavigator({
    Homescreen: {
        screen: DashboardStackNavigator,
      },
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

  export default createAppContainer(MyDrawerNavigator);