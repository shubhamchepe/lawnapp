import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BuyerScreen from '../screens/BuyerScreen/BuyerScreen';
import SellerScreen from '../screens/SellerScreen/SellerScreen';
import VendorScreen from '../screens/VendorScreen/VendorScreen';
import MyDrawerNavigator from '../DrawerNav/DrawerNav';




const TabNavigator = createBottomTabNavigator({
    Homescreen: {
      screen: HomeScreen,
      navigationOptions: {
        title:'Home'
      }
    },
    Buyerscreen: {
      screen: () => <BuyerScreen />,
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

  
  export default createAppContainer(TabNavigator);
